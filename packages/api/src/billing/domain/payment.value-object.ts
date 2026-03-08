export class PaymentAmount {
    constructor(
        public readonly value: number,
        public readonly currency: string = 'USD'
    ) {
        if (value < 0) {
            throw new Error('Payment amount cannot be negative');
        }
    }

    format(): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: this.currency
        }).format(this.value);
    }
}
