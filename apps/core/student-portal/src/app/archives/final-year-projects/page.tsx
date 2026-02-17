'use client';

import ResourceListPage from '../../components/resource-list-page';
import { GraduationCap } from 'lucide-react';

const items = [
    { id: 1, title: 'AI-Powered Student Attendance System', description: 'Final year project using facial recognition for automated attendance tracking.', course: 'Computer Science', year: '2024', semester: '2', category: 'AI/ML', format: 'PDF + ZIP', date: 'Archived', downloads: 789, size: '120 MB' },
    { id: 2, title: 'Renewable Energy Grid Simulator', description: 'Simulation software for optimizing solar and wind energy distribution.', course: 'Engineering', year: '2024', semester: '2', category: 'Simulation', format: 'ZIP', date: 'Archived', downloads: 345, size: '85 MB' },
    { id: 3, title: 'Healthcare Management Platform', description: 'Full-stack web application for hospital inventory and appointment management.', course: 'Computer Science', year: '2023', semester: '2', category: 'Full-Stack', format: 'PDF + ZIP', date: 'Archived', downloads: 567, size: '95 MB' },
    { id: 4, title: 'Consumer Behavior Analysis Dashboard', description: 'Business intelligence dashboard analyzing purchasing patterns using Python.', course: 'Business', year: '2024', semester: '2', category: 'Data Science', format: 'ZIP', date: 'Archived', downloads: 234, size: '45 MB' },
];

const filters = {
    courses: ['Computer Science', 'Engineering', 'Business', 'Design'],
    years: ['2024', '2023', '2022', '2021'],
    semesters: ['1', '2'],
    categories: ['AI/ML', 'Full-Stack', 'Simulation', 'Data Science', 'Mobile'],
};

export default function FinalYearProjectsPage() {
    return (
        <ResourceListPage
            title="Final Year Projects Archive"
            subtitle="Archived final year dissertation projects with reports and source code."
            icon={GraduationCap}
            accentColor="#10B981"
            items={items}
            filters={filters}
        />
    );
}
