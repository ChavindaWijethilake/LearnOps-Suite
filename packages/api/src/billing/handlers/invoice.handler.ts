import { BillingService } from '../billing.service';
import { CreateInvoiceDto, createInvoiceDtoSchema } from '../dto/create-invoice.dto';
import { InvoiceMapper } from '../dto/invoice-response.dto';
import { InvoiceEntity } from '../domain/invoice.entity';

// Simulating an Express/Next.js request handler
export class InvoiceHandler {
    static async handleCreateInvoice(reqBody: unknown) {
        // Validation
        const result = createInvoiceDtoSchema.safeParse(reqBody);

        if (!result.success) {
            return {
                status: 400,
                error: result.error.errors
            };
        }

        const dto = result.data;

        // Use domain entity for complex business logic (simulated here)
        const newEntity = InvoiceEntity.create(dto.customerId, dto.amount);

        // Persist via application service
        const savedInvoice = BillingService.createInvoice({
            customerId: newEntity.customerId,
            amount: newEntity.amount,
            status: newEntity.status,
            date: new Date(newEntity.createdAt).toISOString()
        });

        // In a real system the repository would persist and return the entity
        newEntity.id = savedInvoice.id;

        return {
            status: 201,
            data: InvoiceMapper.toResponseDto(newEntity)
        };
    }
}
