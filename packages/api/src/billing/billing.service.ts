// LearnOps API — Billing Service
// Business logic for invoices, payments, and financial operations

"use client";

import { InvoiceRepository, CustomerRepository, type Invoice, type Customer } from '@learnops/db/src/repositories';
import { LocalStorageAdapter } from '@learnops/db/src/adapters';
import { createInvoiceSchema, createCustomerSchema } from '@learnops/db/src/schemas';

const adapter = new LocalStorageAdapter();
const invoiceRepo = new InvoiceRepository(adapter);
const customerRepo = new CustomerRepository(adapter);

export const BillingService = {
    // ── Invoice Operations ──

    getAllInvoices(): Invoice[] {
        return invoiceRepo.findAll();
    },

    getInvoiceById(id: string): Invoice | null {
        return invoiceRepo.findById(id);
    },

    createInvoice(data: Omit<Invoice, 'id'>): Invoice {
        const validated = createInvoiceSchema.parse(data);
        return invoiceRepo.create(validated as Omit<Invoice, 'id'>);
    },

    payInvoice(id: string): Invoice | null {
        return invoiceRepo.markAsPaid(id);
    },

    getInvoicesByCustomer(customerId: string): Invoice[] {
        return invoiceRepo.findByCustomer(customerId);
    },

    getRevenueSummary() {
        return {
            totalRevenue: invoiceRepo.getTotalRevenue(),
            totalOutstanding: invoiceRepo.getTotalOutstanding(),
            paidCount: invoiceRepo.findByStatus('Paid').length,
            unpaidCount: invoiceRepo.findByStatus('Unpaid').length,
            totalInvoices: invoiceRepo.count(),
        };
    },

    // ── Customer Operations ──

    getAllCustomers(): Customer[] {
        return customerRepo.findAll();
    },

    getCustomerById(id: string): Customer | null {
        return customerRepo.findById(id);
    },

    createCustomer(data: Omit<Customer, 'id'>): Customer {
        const validated = createCustomerSchema.parse(data);
        return customerRepo.create(validated as Omit<Customer, 'id'>);
    },

    getActiveCustomers(): Customer[] {
        return customerRepo.findActive();
    },
};
