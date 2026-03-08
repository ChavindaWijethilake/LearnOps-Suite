// LearnOps DB — LocalStorage Adapter
// Implements IStorageAdapter using browser localStorage

"use client";

import { IStorageAdapter } from './adapter.interface';

export class LocalStorageAdapter implements IStorageAdapter {
    private storagePrefix: string;

    constructor(prefix: string = 'learnops') {
        this.storagePrefix = prefix;
    }

    private getKey(collection: string): string {
        return `${this.storagePrefix}_${collection}`;
    }

    private readCollection<T>(collection: string): T[] {
        if (typeof window === 'undefined') return [];
        const stored = localStorage.getItem(this.getKey(collection));
        if (!stored) return [];
        try {
            return JSON.parse(stored);
        } catch {
            return [];
        }
    }

    private writeCollection<T>(collection: string, data: T[]): void {
        if (typeof window === 'undefined') return;
        localStorage.setItem(this.getKey(collection), JSON.stringify(data));
    }

    getAll<T>(collection: string): T[] {
        return this.readCollection<T>(collection);
    }

    getById<T extends { id: string }>(collection: string, id: string): T | null {
        const items = this.readCollection<T>(collection);
        return items.find((item: any) => item.id === id) || null;
    }

    create<T extends { id: string }>(collection: string, item: T): T {
        const items = this.readCollection<T>(collection);
        items.push(item);
        this.writeCollection(collection, items);
        return item;
    }

    update<T extends { id: string }>(collection: string, id: string, updates: Partial<T>): T | null {
        const items = this.readCollection<T>(collection);
        const index = items.findIndex((item: any) => item.id === id);
        if (index === -1) return null;

        items[index] = { ...items[index], ...updates } as T;
        this.writeCollection(collection, items);
        return items[index];
    }

    delete(collection: string, id: string): boolean {
        const items = this.readCollection<any>(collection);
        const filtered = items.filter((item: any) => item.id !== id);
        if (filtered.length === items.length) return false;

        this.writeCollection(collection, filtered);
        return true;
    }

    query<T>(collection: string, predicate: (item: T) => boolean): T[] {
        return this.readCollection<T>(collection).filter(predicate);
    }

    count(collection: string): number {
        return this.readCollection(collection).length;
    }
}
