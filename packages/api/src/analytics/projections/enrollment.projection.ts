import { eventBus } from '@learnops/shared/events';

interface EnrollmentReadModel {
    totalEnrollments: number;
    coursePopularity: Record<string, number>; // courseId -> count
    lastUpdated: number;
}

export class EnrollmentProjection {
    private static model: EnrollmentReadModel = {
        totalEnrollments: 0,
        coursePopularity: {},
        lastUpdated: Date.now()
    };

    static initialize() {
        console.log('[Analytics] Initializing Enrollment Projection...');

        const events = eventBus.getEventsByType('student.enrolled', 1000);
        this.model.totalEnrollments = 0;
        this.model.coursePopularity = {};

        for (const event of events) {
            this.applyEnrollment(event.payload.courseId);
        }

        eventBus.subscribe('student.enrolled', (payload) => {
            this.applyEnrollment(payload.courseId);
        });
    }

    private static applyEnrollment(courseId: string) {
        this.model.totalEnrollments += 1;
        if (!this.model.coursePopularity[courseId]) {
            this.model.coursePopularity[courseId] = 0;
        }
        this.model.coursePopularity[courseId] += 1;
        this.model.lastUpdated = Date.now();
    }

    static getReadModel(): EnrollmentReadModel {
        return { ...this.model };
    }
}
