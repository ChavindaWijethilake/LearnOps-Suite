// LearnOps DB — Base Repository
// Generic CRUD operations backed by any IStorageAdapter

"use client";

import { IStorageAdapter } from '../adapters/adapter.interface';

export class BaseRepository<T extends { id: string }> {
    protected adapter: IStorageAdapter;
    protected collection: string;

    constructor(adapter: IStorageAdapter, collection: string) {
        this.adapter = adapter;
        this.collection = collection;
    }

    /** Get all items */
    findAll(): T[] {
        return this.adapter.getAll<T>(this.collection);
    }

    /** Get a single item by ID */
    findById(id: string): T | null {
        return this.adapter.getById<T>(this.collection, id);
    }

    /** Create a new item (auto-generates ID if not present) */
    create(data: Omit<T, 'id'> & { id?: string }): T {
        const item = {
            ...data,
            id: data.id || `${this.collection.slice(0, 3)}-${Date.now()}-${Math.random().toString(36).substring(7)}`,
        } as T;
        return this.adapter.create<T>(this.collection, item);
    }

    /** Update an existing item */
    update(id: string, updates: Partial<T>): T | null {
        return this.adapter.update<T>(this.collection, id, updates);
    }

    /** Delete an item */
    delete(id: string): boolean {
        return this.adapter.delete(this.collection, id);
    }

    /** Find items matching a predicate */
    findWhere(predicate: (item: T) => boolean): T[] {
        return this.adapter.query<T>(this.collection, predicate);
    }

    /** Count all items */
    count(): number {
        return this.adapter.count(this.collection);
    }
}
