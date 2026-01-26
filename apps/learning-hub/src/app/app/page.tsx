'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, Users, ChevronRight } from 'lucide-react';

interface Course {
  id: string;
  name: string;
  description: string | null;
  code: string;
  enrolledCount: number;
}

export default function DashboardPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/courses');
      if (response.ok) {
        const data = await response.json();
        setCourses(data.courses || []);
        setEnrolledCourses(data.enrolled || []);
      }
    } catch (err) {
      setError('Failed to load courses');
    } finally {
      setIsLoading(false);
    }
  };

  const enrollCourse = async (courseId: string) => {
    try {
      const response = await fetch(`/api/courses/${courseId}/enroll`, { method: 'POST' });
      if (response.ok) {
        setEnrolledCourses([...enrolledCourses, courseId]);
      }
    } catch (err) {
      setError('Failed to enroll in course');
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Learning Hub</h1>
        <p className="text-gray-600 dark:text-gray-400">Explore courses and track your learning progress</p>
      </div>

      {error && (
        <div className="bg-red-500/20 border border-red-500/30 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading courses...</p>
        </div>
      ) : (
        <>
          {/* Enrolled Courses */}
          {enrolledCourses.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">My Courses</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {courses
                  .filter(c => enrolledCourses.includes(c.id))
                  .map((course) => (
                    <Link key={course.id} href={`/app/courses/${course.id}`}>
                      <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-emerald-400/50 transition cursor-pointer h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {course.name}
                            </h3>
                            <p className="text-sm text-emerald-600 font-medium">{course.code}</p>
                          </div>
                          <ChevronRight className="w-6 h-6 text-emerald-600" />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                          {course.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Users className="w-4 h-4" />
                          {course.enrolledCount} students
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}

          {/* Available Courses */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Available Courses</h2>
            {courses.length === 0 ? (
              <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-12 text-center">
                <p className="text-gray-600 dark:text-gray-400">No courses available</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-emerald-400/50 transition"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {course.name}
                        </h3>
                        <p className="text-sm text-emerald-600 font-medium">{course.code}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Users className="w-4 h-4" />
                        {course.enrolledCount} students
                      </div>
                      {enrolledCourses.includes(course.id) ? (
                        <Link href={`/app/courses/${course.id}`}>
                          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-emerald-500/20 text-emerald-700 border border-emerald-400/30">
                            View
                          </button>
                        </Link>
                      ) : (
                        <button
                          onClick={() => enrollCourse(course.id)}
                          className="px-4 py-2 rounded-lg text-sm font-medium bg-emerald-500/30 text-emerald-700 hover:bg-emerald-500/40 transition border border-emerald-400/30"
                        >
                          Enroll
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
