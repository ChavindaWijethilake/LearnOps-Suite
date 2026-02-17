'use client';

import ResourceListPage from '../../components/resource-list-page';
import { List } from 'lucide-react';

const items = [
    { id: 1, title: 'Object-Oriented Programming Topics 2024', description: 'List of all coursework topics assigned for OOP module including design patterns.', course: 'Computer Science', year: '2024', semester: '2', category: 'Topic List', format: 'PDF', date: 'Archived', downloads: 234, size: '0.8 MB' },
    { id: 2, title: 'Advanced Calculus Coursework Topics', description: 'Faculty-approved topics for advanced calculus independent study projects.', course: 'Mathematics', year: '2025', semester: '1', category: 'Topic List', format: 'PDF', date: 'Archived', downloads: 178, size: '0.5 MB' },
    { id: 3, title: 'Digital Marketing Strategy Topics', description: 'Curated list of approved topics for the digital marketing strategy coursework.', course: 'Business', year: '2024', semester: '2', category: 'Topic List', format: 'PDF', date: 'Archived', downloads: 145, size: '0.6 MB' },
    { id: 4, title: 'Machine Learning Research Topics 2025', description: 'Approved research topics for the ML module covering NLP, computer vision, and reinforcement learning.', course: 'Computer Science', year: '2025', semester: '1', category: 'Research Topics', format: 'PDF', date: 'Archived', downloads: 312, size: '0.9 MB' },
];

const filters = {
    courses: ['Computer Science', 'Mathematics', 'Business', 'Engineering'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Topic List', 'Research Topics', 'Dissertation Topics'],
};

export default function CourseworkTopicsPage() {
    return (
        <ResourceListPage
            title="Past Coursework Topics"
            subtitle="Archived lists of coursework topics and research questions by module."
            icon={List}
            accentColor="#8B5CF6"
            items={items}
            filters={filters}
        />
    );
}
