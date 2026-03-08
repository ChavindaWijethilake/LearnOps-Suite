export class InvoiceEntity {
    private constructor(
        public readonly id: string,
        public readonly customerId: string,
        public amount: number,
        public status: 'Draft' | 'Sent' | 'Paid' | 'Unpaid' | 'Overdue',
        public readonly createdAt: number,
        public updatedAt: number
    ) { }

    static create(customerId: string, amount: number): InvoiceEntity {
        return new InvoiceEntity(
            `INV-${Date.now()}`,
            customerId,
            amount,
            'Draft',
            Date.now(),
            Date.now()
        );
    }

    markAsSent(): void {
        if (this.status !== 'Draft') throw new Error('Only Draft invoices can be sent');
        this.status = 'Sent';
        this.updatedAt = Date.now();
    }

    markAsPaid(): void {
        if (this.status === 'Paid') return;
        this.status = 'Paid';
        this.updatedAt = Date.now();
    }
}
