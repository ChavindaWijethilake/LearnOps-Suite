'use client';

import { useEffect } from 'react';
import { eventBus } from '@learnops/shared/events';
import { BillingService } from '@learnops/api/src/billing/billing.service';

/**
 * BillingEvents Component
 * Subscribes to cross-module domain events and executes billing side-effects.
 * This is a key part of the "Modular Monolith" event-driven architecture.
 */
export const BillingEvents = () => {
    useEffect(() => {
        console.log('[BillingEvents] 🛰️ Initializing Domain Event Subscriptions...');

        // 1. Listen for Course Enrollments
        const unsubscribeEnrollment = eventBus.subscribe('student.enrolled', (payload) => {
            console.log('[BillingEvents] 🎓 Student Enrolled Event Received:', payload);

            // Logic: Automatically create an invoice when a student enrolls
            try {
                const invoice = BillingService.createInvoice({
                    customerId: payload.studentId,
                    amount: 250, // Standard enrollment fee
                    status: 'Unpaid',
                    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
                    issuedDate: new Date().toISOString(),
                    items: JSON.stringify([
                        { description: `Course Enrollment: ${payload.courseId}`, quantity: 1, price: 250 }
                    ]),
                });

                console.log('[BillingEvents] ✅ Auto-Invoice Created:', invoice.id);
            } catch (error) {
                console.error('[BillingEvents] ❌ Failed to create auto-invoice:', error);
            }
        });

        // 2. Listen for Course Completion (Maybe a rebate or certificate fee?)
        const unsubscribeCompletion = eventBus.subscribe('course.completed', (payload) => {
            console.log('[BillingEvents] 🏆 Course Completion Event Received:', payload);
            // Future logic: Trigger certificate billing or loyalty points
        });

        return () => {
            unsubscribeEnrollment();
            unsubscribeCompletion();
        };
    }, []);

    return null; // This is a headless logic component
};
