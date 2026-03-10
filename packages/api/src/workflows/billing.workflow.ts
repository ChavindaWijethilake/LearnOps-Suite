import { eventBus } from '@learnops/shared/events';
import { BillingService } from '../billing/billing.service';

export class BillingWorkflows {
    static initialize() {
        console.log('[Workflows] Initializing Billing Workflows...');

        // Workflow 1: Auto-generate invoice when a student enrolls in a course
        eventBus.subscribe('student.enrolled', (payload) => {
            console.log(`[Billing Workflow] Handling student.enrolled for student ${payload.studentId}`);

            BillingService.createInvoice({
                customerId: payload.studentId, // Ensure the student is registered as a customer
                amount: 1500, // Standard course fee (in a real app, this would be looked up based on courseId)
                status: 'pending',
                dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
                issuedDate: new Date().toISOString(),
                items: JSON.stringify([{ description: `Course Enrollment: ${payload.courseId}`, quantity: 1, price: 1500 }])
            });

            console.log('[Billing Workflow] Auto-generated invoice for course fee.');
        });
    }
}
