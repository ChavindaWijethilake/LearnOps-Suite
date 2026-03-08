import { z } from 'zod';

export const TicketSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    status: z.enum(['Open', 'In Progress', 'Resolved', 'Closed']),
    priority: z.enum(['Low', 'Medium', 'High', 'Urgent']),
    reporterId: z.string(),
    assigneeId: z.string().optional(),
    createdAt: z.number(),
    updatedAt: z.number()
});

export const CreateTicketRequestSchema = z.object({
    title: z.string().min(5),
    description: z.string().min(10),
    priority: z.enum(['Low', 'Medium', 'High', 'Urgent']).default('Medium')
});

export type Ticket = z.infer<typeof TicketSchema>;
export type CreateTicketRequest = z.infer<typeof CreateTicketRequestSchema>;
