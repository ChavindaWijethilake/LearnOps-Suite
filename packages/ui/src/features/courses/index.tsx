import React from 'react';

export function useCourses() {
    return {
        courses: [],
        loading: false
    };
}

export function CourseCard({ title, instructor }: { title: string; instructor: string }) {
    return (
        <div className="bg-slate-800 border border-slate-700 overflow-hidden group cursor-pointer hover:border-blue-500 transition-colors">
            <div className="aspect-video bg-slate-900 w-full relative">
                {/* Simulated course image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900/80" />
            </div>
            <div className="p-4">
                <h3 className="text-slate-200 font-bold group-hover:text-blue-400 transition-colors">{title}</h3>
                <p className="text-sm text-slate-500 mt-1">{instructor}</p>
            </div>
        </div>
    );
}

export function EnrollmentForm() {
    return (
        <div className="bg-slate-800 p-6 border border-slate-700 text-center">
            <h3 className="text-slate-200 font-bold mb-4">Enroll in Course</h3>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-6 w-full transition-colors">
                Confirm Enrollment
            </button>
        </div>
    );
}
