'use client';

import ResourceListPage from '../../components/resource-list-page';
import { ClipboardList } from 'lucide-react';

const items = [
    { id: 1, title: 'Database Systems – Assignment 3', description: 'SQL query optimization and normalization assignment with sample solutions.', course: 'Computer Science', year: '2025', semester: '1', category: 'Individual', format: 'PDF', date: 'Archived', downloads: 456, size: '2.3 MB' },
    { id: 2, title: 'Differential Equations Problem Set', description: 'Assignment covering ordinary and partial differential equations with proofs.', course: 'Mathematics', year: '2024', semester: '2', category: 'Individual', format: 'PDF', date: 'Archived', downloads: 312, size: '1.8 MB' },
    { id: 3, title: 'Group Business Plan Report', description: 'Team assignment to create a comprehensive business plan for a tech startup.', course: 'Business', year: '2025', semester: '1', category: 'Group', format: 'PDF', date: 'Archived', downloads: 198, size: '6.2 MB' },
    { id: 4, title: 'Embedded Systems Lab Assignment', description: 'Hands-on assignment on microcontroller programming and sensor interfacing.', course: 'Engineering', year: '2024', semester: '1', category: 'Lab Assignment', format: 'PDF + ZIP', date: 'Archived', downloads: 167, size: '15 MB' },
];

const filters = {
    courses: ['Computer Science', 'Mathematics', 'Business', 'Engineering'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Individual', 'Group', 'Lab Assignment', 'Take-Home'],
};

export default function AssignmentsPage() {
    return (
        <ResourceListPage
            title="Assignment Submissions Archive"
            subtitle="Past assignment papers and exemplar submissions across all departments."
            icon={ClipboardList}
            accentColor="#D946EF"
            items={items}
            filters={filters}
        />
    );
}
