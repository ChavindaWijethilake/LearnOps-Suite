// LearnOps DB — Storage Adapter Interface
// Allows swapping between LocalStorage, Prisma, Supabase, etc.

export interface IStorageAdapter {
    /** Get all items of a given collection */
    getAll<T>(collection: string): T[];

    /** Get a single item by ID */
    getById<T extends { id: string }>(collection: string, id: string): T | null;

    /** Create a new item */
    create<T extends { id: string }>(collection: string, item: T): T;

    /** Update an existing item by ID */
    update<T extends { id: string }>(collection: string, id: string, updates: Partial<T>): T | null;

    /** Delete an item by ID */
    delete(collection: string, id: string): boolean;

    /** Query items with a filter function */
    query<T>(collection: string, predicate: (item: T) => boolean): T[];

    /** Count items in a collection */
    count(collection: string): number;
}
