'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Circle, BookOpen } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  description: string | null;
  content: string | null;
  completed: boolean;
}

interface Course {
  id: string;
  name: string;
  description: string | null;
  code: string;
}

export default function CoursePage() {
  const params = useParams();
  const courseId = params.id as string;

  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCourse();
    fetchLessons();
  }, [courseId]);

  const fetchCourse = async () => {
    try {
      const response = await fetch(`/api/courses/${courseId}`);
      if (response.ok) {
        const data = await response.json();
        setCourse(data);
      }
    } catch (err) {
      setError('Failed to load course');
    }
  };

  const fetchLessons = async () => {
    try {
      const response = await fetch(`/api/courses/${courseId}/lessons`);
      if (response.ok) {
        const data = await response.json();
        setLessons(data);
        if (data.length > 0) {
          setSelectedLesson(data[0]);
        }
      }
    } catch (err) {
      setError('Failed to load lessons');
    } finally {
      setIsLoading(false);
    }
  };

  const completeLesson = async (lessonId: string) => {
    try {
      const response = await fetch(`/api/courses/${courseId}/lessons/${lessonId}/complete`, {
        method: 'POST',
      });

      if (response.ok) {
        setLessons(
          lessons.map(l =>
            l.id === lessonId ? { ...l, completed: true } : l
          )
        );
        if (selectedLesson?.id === lessonId) {
          setSelectedLesson({ ...selectedLesson, completed: true });
        }
      }
    } catch (err) {
      setError('Failed to complete lesson');
    }
  };

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading course...</p>
      </div>
    );
  }

  if (!course) {
    return <div className="text-center py-12 text-gray-600">Course not found</div>;
  }

  const completedCount = lessons.filter(l => l.completed).length;
  const totalCount = lessons.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div>
      <Link href="/app" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Courses
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {selectedLesson && (
            <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {selectedLesson.title}
              </h2>

              {selectedLesson.description && (
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {selectedLesson.description}
                </p>
              )}

              {selectedLesson.content && (
                <div className="bg-white/30 dark:bg-slate-800/30 rounded-lg p-6 mb-6 text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                  {selectedLesson.content}
                </div>
              )}

              {!selectedLesson.completed && (
                <button
                  onClick={() => completeLesson(selectedLesson.id)}
                  className="px-6 py-3 rounded-lg font-medium bg-emerald-500/30 text-emerald-700 hover:bg-emerald-500/40 transition border border-emerald-400/30"
                >
                  Mark as Complete
                </button>
              )}

              {selectedLesson.completed && (
                <div className="flex items-center gap-2 text-emerald-600 font-medium">
                  <CheckCircle2 className="w-5 h-5" />
                  Completed
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {course.name}
            </h3>
            <p className="text-sm text-emerald-600 font-medium mb-4">{course.code}</p>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Progress
                </span>
                <span className="text-sm font-bold text-emerald-600">
                  {completedCount}/{totalCount}
                </span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-3">
                <div
                  className="bg-emerald-500 h-3 rounded-full transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">{progressPercent}% complete</p>
            </div>

            {course.description && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {course.description}
              </p>
            )}
          </div>

          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Lessons
            </h4>

            <div className="space-y-2">
              {lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => setSelectedLesson(lesson)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition ${
                    selectedLesson?.id === lesson.id
                      ? 'bg-emerald-500/30 border border-emerald-400/30'
                      : 'hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {lesson.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    )}
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {lesson.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
