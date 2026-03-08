// LearnOps DB — Prisma Adapter
// Implements IStorageAdapter using Prisma ORM (for Postgres/SQLite)

import { IStorageAdapter } from './adapter.interface';
import { PrismaClient } from '@prisma/client';

/**
 * PrismaAdapter maps collections to Prisma model names.
 * This is a bridge adapter — for production use, you would
 * typically use Prisma repositories directly.
 */
export class PrismaAdapter implements IStorageAdapter {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    private getModel(collection: string): any {
        // Map collection names to Prisma models
        const modelMap: Record<string, any> = {
            invoices: this.prisma.invoice,
            customers: this.prisma.customer,
            tickets: this.prisma.ticket,
            courses: this.prisma.course,
            users: this.prisma.user,
        };

        const model = modelMap[collection];
        if (!model) {
            throw new Error(`No Prisma model mapped for collection: ${collection}`);
        }
        return model;
    }

    async getAll<T>(collection: string): Promise<T[]> {
        const model = this.getModel(collection);
        return model.findMany();
    }

    async getById<T extends { id: string }>(collection: string, id: string): Promise<T | null> {
        const model = this.getModel(collection);
        return model.findUnique({ where: { id } });
    }

    async create<T extends { id: string }>(collection: string, item: T): Promise<T> {
        const model = this.getModel(collection);
        return model.create({ data: item });
    }

    async update<T extends { id: string }>(collection: string, id: string, updates: Partial<T>): Promise<T | null> {
        const model = this.getModel(collection);
        return model.update({ where: { id }, data: updates });
    }

    async delete(collection: string, id: string): Promise<boolean> {
        const model = this.getModel(collection);
        try {
            await model.delete({ where: { id } });
            return true;
        } catch {
            return false;
        }
    }

    async query<T>(collection: string, predicate: (item: T) => boolean): Promise<T[]> {
        // For Prisma, we fetch all and filter in-memory
        // In production, you would translate predicates to Prisma where clauses
        const all = await this.getAll<T>(collection);
        return all.filter(predicate);
    }

    async count(collection: string): Promise<number> {
        const model = this.getModel(collection);
        return model.count();
    }
}
