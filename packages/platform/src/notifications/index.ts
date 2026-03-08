// LearnOps Platform — Notifications Module
// Centralized notification system for cross-module alerts

"use client";

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
    id: string;
    type: NotificationType;
    title: string;
    message: string;
    module: string;
    read: boolean;
    timestamp: number;
    metadata?: Record<string, any>;
}

class NotificationManager {
    private storageKey = "learnops_notifications";
    private maxNotifications = 50;

    private getAll(): Notification[] {
        if (typeof window === "undefined") return [];
        const stored = localStorage.getItem(this.storageKey);
        if (!stored) return [];
        try {
            return JSON.parse(stored);
        } catch {
            return [];
        }
    }

    private save(notifications: Notification[]): void {
        if (typeof window === "undefined") return;
        localStorage.setItem(this.storageKey, JSON.stringify(notifications));
    }

    /** Send a new notification */
    send(notification: Omit<Notification, 'id' | 'timestamp' | 'read'>): Notification {
        const all = this.getAll();
        const newNotification: Notification = {
            ...notification,
            id: `notif-${Date.now()}-${Math.random().toString(36).substring(7)}`,
            read: false,
            timestamp: Date.now(),
        };

        all.unshift(newNotification);
        if (all.length > this.maxNotifications) {
            all.splice(this.maxNotifications);
        }

        this.save(all);
        return newNotification;
    }

    /** Get recent notifications */
    getRecent(limit: number = 10): Notification[] {
        return this.getAll().slice(0, limit);
    }

    /** Get unread count */
    getUnreadCount(): number {
        return this.getAll().filter(n => !n.read).length;
    }

    /** Mark a notification as read */
    markAsRead(id: string): void {
        const all = this.getAll();
        const notification = all.find(n => n.id === id);
        if (notification) {
            notification.read = true;
            this.save(all);
        }
    }

    /** Mark all as read */
    markAllAsRead(): void {
        const all = this.getAll();
        all.forEach(n => (n.read = true));
        this.save(all);
    }

    /** Get notifications filtered by module */
    getByModule(module: string, limit: number = 10): Notification[] {
        return this.getAll()
            .filter(n => n.module === module)
            .slice(0, limit);
    }

    /** Clear all notifications */
    clear(): void {
        if (typeof window === "undefined") return;
        localStorage.removeItem(this.storageKey);
    }
}

export const notifications = new NotificationManager();
