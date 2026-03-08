// LearnOps DB — Invoice Repository

"use client";

import { BaseRepository } from './base.repository';
import { IStorageAdapter } from '../adapters/adapter.interface';

export interface Invoice {
    id: string;
    customerId: string;
    amount: number;
    status: 'Paid' | 'Unpaid' | 'Overdue' | 'Cancelled';
    date: string;
    dueDate?: string;
    description?: string;
}

export class InvoiceRepository extends BaseRepository<Invoice> {
    constructor(adapter: IStorageAdapter) {
        super(adapter, 'invoices');
    }

    /** Get invoices by status */
    findByStatus(status: Invoice['status']): Invoice[] {
        return this.findWhere(inv => inv.status === status);
    }

    /** Get invoices for a customer */
    findByCustomer(customerId: string): Invoice[] {
        return this.findWhere(inv => inv.customerId === customerId);
    }

    /** Mark an invoice as paid */
    markAsPaid(id: string): Invoice | null {
        return this.update(id, { status: 'Paid' });
    }

    /** Get total revenue (paid invoices) */
    getTotalRevenue(): number {
        return this.findByStatus('Paid').reduce((sum, inv) => sum + inv.amount, 0);
    }

    /** Get total outstanding (unpaid invoices) */
    getTotalOutstanding(): number {
        return this.findByStatus('Unpaid').reduce((sum, inv) => sum + inv.amount, 0);
    }
}
