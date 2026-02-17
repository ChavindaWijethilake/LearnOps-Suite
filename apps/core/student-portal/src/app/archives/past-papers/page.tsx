'use client';

import ResourceListPage from '../../components/resource-list-page';
import { FileText } from 'lucide-react';

const items = [
    { id: 1, title: 'Data Structures & Algorithms – Final 2024', description: 'Final examination paper covering trees, dynamic programming, and graph algorithms.', course: 'Computer Science', year: '2024', semester: '2', category: 'Final Exam', format: 'PDF', date: 'Archived', downloads: 892, size: '2.1 MB' },
    { id: 2, title: 'Linear Algebra – Mid-Semester 2025', description: 'Mid-term paper on matrices, linear transformations, and eigenvalue problems.', course: 'Mathematics', year: '2025', semester: '1', category: 'Mid-Semester', format: 'PDF', date: 'Archived', downloads: 567, size: '1.4 MB' },
    { id: 3, title: 'Organic Chemistry – Final 2024', description: 'Comprehensive exam covering reaction mechanisms, stereochemistry, and spectroscopy.', course: 'Chemistry', year: '2024', semester: '2', category: 'Final Exam', format: 'PDF', date: 'Archived', downloads: 445, size: '3.2 MB' },
    { id: 4, title: 'Microeconomics – Mid-Semester 2025', description: 'Paper covering supply/demand analysis, elasticity, and market structures.', course: 'Business', year: '2025', semester: '1', category: 'Mid-Semester', format: 'PDF', date: 'Archived', downloads: 312, size: '1.8 MB' },
    { id: 5, title: 'Classical Mechanics – Final 2023', description: 'Advanced exam on Lagrangian mechanics, oscillations, and rotational dynamics.', course: 'Physics', year: '2023', semester: '2', category: 'Final Exam', format: 'PDF', date: 'Archived', downloads: 678, size: '2.5 MB' },
    { id: 6, title: 'Software Engineering – Supplementary 2024', description: 'Supplementary paper on design patterns, testing, and agile methodologies.', course: 'Computer Science', year: '2024', semester: '1', category: 'Supplementary', format: 'PDF', date: 'Archived', downloads: 234, size: '1.9 MB' },
];

const filters = {
    courses: ['Computer Science', 'Mathematics', 'Chemistry', 'Business', 'Physics'],
    years: ['2025', '2024', '2023', '2022'],
    semesters: ['1', '2'],
    categories: ['Final Exam', 'Mid-Semester', 'Supplementary', 'Quiz'],
};

export default function PastPapersPage() {
    return (
        <ResourceListPage
            title="Past Papers"
            subtitle="Archived examination papers organized by course, year, and semester."
            icon={FileText}
            accentColor="#EF4444"
            items={items}
            filters={filters}
        />
    );
}
