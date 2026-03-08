import { RevenueProjection } from './projections/revenue.projection';
import { EnrollmentProjection } from './projections/enrollment.projection';
import { TicketMetricsProjection } from './projections/ticket-metrics.projection';

// Initialize the projections (this would normally be done at app startup in a worker or gateway)
if (typeof window === 'undefined') {
    RevenueProjection.initialize();
    EnrollmentProjection.initialize();
    TicketMetricsProjection.initialize();
}

export const AnalyticsService = {
    /**
     * Get system-wide KPI dashboard statistics.
     * Decoupled! Now reads purely from in-memory event projections rather than hitting service DBs directly.
     */
    getDashboardStats() {
        const revenueData = RevenueProjection.getReadModel();
        const enrollmentData = EnrollmentProjection.getReadModel();
        const ticketData = TicketMetricsProjection.getReadModel();

        return {
            financial: {
                totalRevenue: revenueData.totalRevenue,
                monthlyTrend: Object.keys(revenueData.monthlyRevenue).length > 0 ? "Up" : "Stable"
            },
            learning: {
                totalEnrollments: enrollmentData.totalEnrollments,
                topCourseId: this.getTopCourse(enrollmentData.coursePopularity)
            },
            support: {
                openTickets: ticketData.totalCreated - ticketData.totalResolved,
                avgResolutionTimeMs: ticketData.averageResolutionTimeMs
            },
            lastUpdated: new Date().toISOString()
        };
    },

    // Helper
    private getTopCourse(popularity: Record<string, number>): string | null {
        let topCourse: string | null = null;
        let max = -1;
        for (const [courseId, count] of Object.entries(popularity)) {
            if (count > max) {
                max = count;
                topCourse = courseId;
            }
        }
        return topCourse;
    }
};
