// LearnOps DB — Course Repository

"use client";

import { BaseRepository } from './base.repository';
import { IStorageAdapter } from '../adapters/adapter.interface';

export interface Course {
    id: string;
    title: string;
    description?: string;
    progress: number;
    instructor: string;
    status?: 'Active' | 'Completed' | 'Archived';
    enrolledStudents?: number;
}

export class CourseRepository extends BaseRepository<Course> {
    constructor(adapter: IStorageAdapter) {
        super(adapter, 'courses');
    }

    /** Get courses by instructor */
    findByInstructor(instructor: string): Course[] {
        return this.findWhere(c => c.instructor === instructor);
    }

    /** Get completed courses */
    findCompleted(): Course[] {
        return this.findWhere(c => c.progress >= 100);
    }

    /** Get courses in progress */
    findInProgress(): Course[] {
        return this.findWhere(c => c.progress > 0 && c.progress < 100);
    }

    /** Update course progress */
    updateProgress(id: string, progress: number): Course | null {
        return this.update(id, {
            progress: Math.min(100, Math.max(0, progress)),
            ...(progress >= 100 ? { status: 'Completed' as const } : {}),
        });
    }
}
