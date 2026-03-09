// LearnOps API — Courses Service
// Business logic for learning management

"use client";

import { CourseRepository, type Course } from '@learnops/db/src/repositories';
import { LocalStorageAdapter } from '@learnops/db/src/adapters';
import { createCourseSchema } from '@learnops/db/src/schemas';
import { eventBus } from '@learnops/shared/events';

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
        const course = courseRepo.create(validated as Omit<Course, 'id'>);

        eventBus.publish('course.created', {
            courseId: course.id,
            title: course.title,
            instructor: course.instructor || 'Unassigned',
        }, 'learning');

        return course;
    },

    enrollStudent(courseId: string, studentId: string): void {
        eventBus.publish('student.enrolled', {
            courseId,
            studentId,
        }, 'learning');
    },

    updateProgress(id: string, progress: number): Course | null {
        const updated = courseRepo.updateProgress(id, progress);
        if (progress === 100 && updated) {
            eventBus.publish('course.completed', {
                courseId: id,
                studentId: 'current_user', // In a real system, this would come from the context
            }, 'learning');
        }
        return updated;
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
