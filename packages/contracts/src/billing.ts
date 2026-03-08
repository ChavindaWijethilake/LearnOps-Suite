import { z } from 'zod';

export const InvoiceSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.number(),
    status: z.enum(['Draft', 'Sent', 'Paid', 'Unpaid', 'Overdue']),
    createdAt: z.number(),
    updatedAt: z.number()
});

export const CreateInvoiceRequestSchema = z.object({
    customerId: z.string(),
    amount: z.number().positive(),
    items: z.array(z.object({
        description: z.string(),
        quantity: z.number().int().positive(),
        unitPrice: z.number().positive()
    })).optional()
});

export type Invoice = z.infer<typeof InvoiceSchema>;
export type CreateInvoiceRequest = z.infer<typeof CreateInvoiceRequestSchema>;
