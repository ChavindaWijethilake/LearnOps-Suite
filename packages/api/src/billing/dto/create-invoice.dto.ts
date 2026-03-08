import { z } from 'zod';

export const createInvoiceDtoSchema = z.object({
    customerId: z.string().min(1, 'Customer ID is required'),
    amount: z.number().positive('Amount must be positive'),
    items: z.array(z.object({
        description: z.string(),
        quantity: z.number().int().positive(),
        unitPrice: z.number().positive()
    })).optional()
});

export type CreateInvoiceDto = z.infer<typeof createInvoiceDtoSchema>;
