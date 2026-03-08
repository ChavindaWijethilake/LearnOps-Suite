// LearnOps API — Courses Service
// Business logic for learning management

"use client";

import { CourseRepository, type Course } from '@learnops/db/src/repositories';
import { LocalStorageAdapter } from '@learnops/db/src/adapters';
import { createCourseSchema } from '@learnops/db/src/schemas';

const adapter = new LocalStorageAdapter();
const courseRepo = new CourseRepository(adapter);

export const CoursesService = {
    getAllCourses(): Course[] {
        return courseRepo.findAll();
    },

    getCourseById(id: string): Course | null {
        return courseRepo.findById(id);
    },

    createCourse(data: Omit<Course, 'id'>): Course {
        const validated = createCourseSchema.parse(data);
        return courseRepo.create(validated as Omit<Course, 'id'>);
    },

    updateProgress(id: string, progress: number): Course | null {
        return courseRepo.updateProgress(id, progress);
    },

    getCoursesByInstructor(instructor: string): Course[] {
        return courseRepo.findByInstructor(instructor);
    },

    getCompletedCourses(): Course[] {
        return courseRepo.findCompleted();
    },

    getInProgressCourses(): Course[] {
        return courseRepo.findInProgress();
    },

    getLearningSummary() {
        const all = courseRepo.findAll();
        return {
            totalCourses: all.length,
            completedCourses: courseRepo.findCompleted().length,
            inProgressCourses: courseRepo.findInProgress().length,
            averageProgress: all.length > 0
                ? Math.round(all.reduce((sum, c) => sum + c.progress, 0) / all.length)
                : 0,
        };
    },
};
