// LearnOps API — Tickets Service
// Business logic for service requests and ticket management

"use client";

import { TicketRepository, type Ticket } from '@learnops/db/src/repositories';
import { LocalStorageAdapter } from '@learnops/db/src/adapters';
import { createTicketSchema } from '@learnops/db/src/schemas';

const adapter = new LocalStorageAdapter();
const ticketRepo = new TicketRepository(adapter);

export const TicketsService = {
    getAllTickets(): Ticket[] {
        return ticketRepo.findAll();
    },

    getTicketById(id: string): Ticket | null {
        return ticketRepo.findById(id);
    },

    createTicket(data: Omit<Ticket, 'id'>): Ticket {
        const validated = createTicketSchema.parse(data);
        return ticketRepo.create({
            ...validated,
            createdAt: new Date().toISOString(),
        } as Omit<Ticket, 'id'>);
    },

    assignTicket(id: string, assignee: string): Ticket | null {
        return ticketRepo.assign(id, assignee);
    },

    resolveTicket(id: string): Ticket | null {
        return ticketRepo.resolve(id);
    },

    getTicketsByStatus(status: Ticket['status']): Ticket[] {
        return ticketRepo.findByStatus(status);
    },

    getUnassignedTickets(): Ticket[] {
        return ticketRepo.findUnassigned();
    },

    getTicketsByAssignee(assignee: string): Ticket[] {
        return ticketRepo.findByAssignee(assignee);
    },

    getTicketSummary() {
        return {
            total: ticketRepo.count(),
            newTickets: ticketRepo.findByStatus('New').length,
            inProgress: ticketRepo.findByStatus('In Progress').length,
            resolved: ticketRepo.findByStatus('Resolved').length,
            critical: ticketRepo.findByPriority('Critical').length,
        };
    },
};
