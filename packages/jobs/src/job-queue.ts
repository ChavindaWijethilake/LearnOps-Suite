export interface JobDefinition {
    id: string;
    name: string;
    handler: () => Promise<void> | void;
    intervalMs: number;
    enabled: boolean;
}

export type JobState = 'idle' | 'running' | 'completed' | 'failed';

export interface JobExecution {
    jobId: string;
    jobName: string;
    state: JobState;
    lastRunAt: number | null;
    lastError: Error | null;
}

export class JobQueue {
    private jobs: Map<string, JobDefinition> = new Map();
    private executions: Map<string, JobExecution> = new Map();
    private timers: Map<string, ReturnType<typeof setInterval>> = new Map();

    register(job: JobDefinition): void {
        this.jobs.set(job.id, job);
        this.executions.set(job.id, {
            jobId: job.id,
            jobName: job.name,
            state: 'idle',
            lastRunAt: null,
            lastError: null
        });
    }

    start(jobId: string): void {
        const job = this.jobs.get(jobId);
        if (!job || !job.enabled) return;

        if (this.timers.has(jobId)) {
            this.stop(jobId);
        }

        console.log(`[JobQueue] Starting job scheduler: ${job.name} (every ${job.intervalMs}ms)`);

        // Initial run immediately
        this.executeJob(job);

        const timerId = setInterval(() => {
            this.executeJob(job);
        }, job.intervalMs);

        this.timers.set(jobId, timerId);
    }

    stop(jobId: string): void {
        const timerId = this.timers.get(jobId);
        if (timerId) {
            clearInterval(timerId);
            this.timers.delete(jobId);
            console.log(`[JobQueue] Stopped job: ${this.jobs.get(jobId)?.name}`);
        }
    }

    startAll(): void {
        for (const [id, job] of this.jobs) {
            if (job.enabled) {
                this.start(id);
            }
        }
    }

    stopAll(): void {
        for (const id of this.timers.keys()) {
            this.stop(id);
        }
    }

    getExecutionStatus(jobId: string): JobExecution | undefined {
        return this.executions.get(jobId);
    }

    getAllExecutions(): JobExecution[] {
        return Array.from(this.executions.values());
    }

    private async executeJob(job: JobDefinition): Promise<void> {
        const exec = this.executions.get(job.id);
        if (!exec || exec.state === 'running') return; // Prevent concurrent overlapping runs

        exec.state = 'running';

        try {
            await job.handler();
            exec.state = 'completed';
            exec.lastRunAt = Date.now();
            exec.lastError = null;
        } catch (error) {
            exec.state = 'failed';
            exec.lastError = error instanceof Error ? error : new Error(String(error));
            exec.lastRunAt = Date.now();
            console.error(`[JobQueue] Job ${job.name} failed:`, error);
        } finally {
            // Reset to idle after a tiny delay for visibility
            setTimeout(() => {
                if (this.executions.get(job.id)?.state !== 'running') {
                    this.executions.get(job.id)!.state = 'idle';
                }
            }, 1000);
        }
    }
}

// Singleton instance for the system
export const systemJobQueue = new JobQueue();
