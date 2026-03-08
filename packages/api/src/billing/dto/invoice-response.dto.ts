import { InvoiceEntity } from '../domain/invoice.entity';

export interface InvoiceResponseDto {
    id: string;
    customerId: string;
    amount: number;
    status: string;
    formattedDate: string;
}

export class InvoiceMapper {
    static toResponseDto(entity: InvoiceEntity): InvoiceResponseDto {
        return {
            id: entity.id,
            customerId: entity.customerId,
            amount: entity.amount,
            status: entity.status,
            formattedDate: new Date(entity.createdAt).toLocaleDateString()
        };
    }
}
