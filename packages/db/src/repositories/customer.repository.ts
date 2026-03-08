// LearnOps DB — Customer Repository

"use client";

import { BaseRepository } from './base.repository';
import { IStorageAdapter } from '../adapters/adapter.interface';

export interface Customer {
    id: string;
    name: string;
    email: string;
    status: 'Active' | 'Inactive' | 'Suspended';
    createdAt?: string;
}

export class CustomerRepository extends BaseRepository<Customer> {
    constructor(adapter: IStorageAdapter) {
        super(adapter, 'customers');
    }

    /** Find a customer by email */
    findByEmail(email: string): Customer | null {
        const results = this.findWhere(c => c.email === email);
        return results[0] || null;
    }

    /** Get active customers */
    findActive(): Customer[] {
        return this.findWhere(c => c.status === 'Active');
    }
}
