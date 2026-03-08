// LearnOps DB — Ticket Repository

"use client";

import { BaseRepository } from './base.repository';
import { IStorageAdapter } from '../adapters/adapter.interface';

export interface Ticket {
    id: string;
    title: string;
    description?: string;
    status: 'New' | 'In Progress' | 'Resolved' | 'Closed';
    priority: 'Low' | 'Medium' | 'High' | 'Critical';
    assignee: string | null;
    createdBy?: string;
    createdAt?: string;
    resolvedAt?: string;
}

export class TicketRepository extends BaseRepository<Ticket> {
    constructor(adapter: IStorageAdapter) {
        super(adapter, 'requests');
    }

    /** Get tickets by status */
    findByStatus(status: Ticket['status']): Ticket[] {
        return this.findWhere(t => t.status === status);
    }

    /** Get tickets assigned to a user */
    findByAssignee(assignee: string): Ticket[] {
        return this.findWhere(t => t.assignee === assignee);
    }

    /** Get unassigned tickets */
    findUnassigned(): Ticket[] {
        return this.findWhere(t => t.assignee === null);
    }

    /** Assign a ticket to a user */
    assign(id: string, assignee: string): Ticket | null {
        return this.update(id, { assignee, status: 'In Progress' });
    }

    /** Resolve a ticket */
    resolve(id: string): Ticket | null {
        return this.update(id, { status: 'Resolved', resolvedAt: new Date().toISOString() });
    }

    /** Get tickets by priority */
    findByPriority(priority: Ticket['priority']): Ticket[] {
        return this.findWhere(t => t.priority === priority);
    }
}
