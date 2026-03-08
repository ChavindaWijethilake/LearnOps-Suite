// LearnOps Platform — Structured Logging Module
// Enterprise-grade structured JSON logging

export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'fatal';

export interface LogEntry {
    level: LogLevel;
    message: string;
    module: string;
    timestamp: string;
    requestId?: string;
    userId?: string;
    metadata?: Record<string, any>;
}

const LOG_LEVEL_PRIORITY: Record<LogLevel, number> = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
    fatal: 4,
};

class Logger {
    private minLevel: LogLevel;
    private module: string;

    constructor(module: string, minLevel: LogLevel = 'info') {
        this.module = module;
        this.minLevel = minLevel;
    }

    private shouldLog(level: LogLevel): boolean {
        return LOG_LEVEL_PRIORITY[level] >= LOG_LEVEL_PRIORITY[this.minLevel];
    }

    private formatEntry(level: LogLevel, message: string, metadata?: Record<string, any>): LogEntry {
        return {
            level,
            message,
            module: this.module,
            timestamp: new Date().toISOString(),
            metadata,
        };
    }

    private emit(entry: LogEntry): void {
        const formatted = JSON.stringify(entry);

        switch (entry.level) {
            case 'debug':
                console.debug(formatted);
                break;
            case 'info':
                console.info(formatted);
                break;
            case 'warn':
                console.warn(formatted);
                break;
            case 'error':
            case 'fatal':
                console.error(formatted);
                break;
        }
    }

    debug(message: string, metadata?: Record<string, any>): void {
        if (!this.shouldLog('debug')) return;
        this.emit(this.formatEntry('debug', message, metadata));
    }

    info(message: string, metadata?: Record<string, any>): void {
        if (!this.shouldLog('info')) return;
        this.emit(this.formatEntry('info', message, metadata));
    }

    warn(message: string, metadata?: Record<string, any>): void {
        if (!this.shouldLog('warn')) return;
        this.emit(this.formatEntry('warn', message, metadata));
    }

    error(message: string, metadata?: Record<string, any>): void {
        if (!this.shouldLog('error')) return;
        this.emit(this.formatEntry('error', message, metadata));
    }

    fatal(message: string, metadata?: Record<string, any>): void {
        if (!this.shouldLog('fatal')) return;
        this.emit(this.formatEntry('fatal', message, metadata));
    }

    /** Create a child logger with a sub-module name */
    child(subModule: string): Logger {
        return new Logger(`${this.module}:${subModule}`, this.minLevel);
    }
}

/** Create a new logger instance for a module */
export function createLogger(module: string, minLevel?: LogLevel): Logger {
    return new Logger(module, minLevel);
}

export { Logger };
