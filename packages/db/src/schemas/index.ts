// LearnOps DB — Zod Validation Schemas
// Input validation for all domain entities

import { z } from 'zod';

// ── Invoice Schemas ──

export const createInvoiceSchema = z.object({
    customerId: z.string().min(1, 'Customer ID is required'),
    amount: z.number().positive('Amount must be positive'),
    status: z.enum(['Paid', 'Unpaid', 'Overdue', 'Cancelled']).default('Unpaid'),
    date: z.string().min(1, 'Date is required'),
    dueDate: z.string().optional(),
    description: z.string().optional(),
});

export const updateInvoiceSchema = createInvoiceSchema.partial();

// ── Customer Schemas ──

export const createCustomerSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Valid email is required'),
    status: z.enum(['Active', 'Inactive', 'Suspended']).default('Active'),
});

export const updateCustomerSchema = createCustomerSchema.partial();

// ── Ticket Schemas ──

export const createTicketSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().optional(),
    priority: z.enum(['Low', 'Medium', 'High', 'Critical']).default('Medium'),
    status: z.enum(['New', 'In Progress', 'Resolved', 'Closed']).default('New'),
    assignee: z.string().nullable().default(null),
    createdBy: z.string().optional(),
});

export const updateTicketSchema = createTicketSchema.partial();

// ── Course Schemas ──

export const createCourseSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().optional(),
    instructor: z.string().min(1, 'Instructor is required'),
    progress: z.number().min(0).max(100).default(0),
    status: z.enum(['Active', 'Completed', 'Archived']).default('Active'),
    enrolledStudents: z.number().int().min(0).default(0),
});

export const updateCourseSchema = createCourseSchema.partial();
