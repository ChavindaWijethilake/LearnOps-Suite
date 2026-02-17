'use client';

import ResourceListPage from '../../components/resource-list-page';
import { FolderOpen } from 'lucide-react';

const items = [
    { id: 1, title: 'E-Commerce Platform – Sample Project', description: 'Sample full-stack e-commerce application with payment gateway integration.', course: 'Computer Science', year: '2024', semester: '2', category: 'Full-Stack', format: 'ZIP', date: 'Archived', downloads: 456, size: '45 MB' },
    { id: 2, title: 'Supply Chain Optimization Model', description: 'Sample project demonstrating linear programming for logistics optimization.', course: 'Business', year: '2025', semester: '1', category: 'Analytics', format: 'ZIP', date: 'Archived', downloads: 198, size: '12 MB' },
    { id: 3, title: 'IoT Weather Station', description: 'Hardware project using Arduino with cloud data visualization dashboard.', course: 'Engineering', year: '2024', semester: '1', category: 'Hardware', format: 'ZIP', date: 'Archived', downloads: 267, size: '28 MB' },
    { id: 4, title: 'Mobile Fitness Tracker App', description: 'React Native mobile app with step counting, nutrition tracking, and social features.', course: 'Computer Science', year: '2025', semester: '1', category: 'Mobile', format: 'ZIP', date: 'Archived', downloads: 334, size: '52 MB' },
];

const filters = {
    courses: ['Computer Science', 'Business', 'Engineering', 'Design'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Full-Stack', 'Mobile', 'Hardware', 'Analytics', 'Design'],
};

export default function SampleProjectsPage() {
    return (
        <ResourceListPage
            title="Sample Projects"
            subtitle="Exemplar projects and reference implementations across disciplines."
            icon={FolderOpen}
            accentColor="#06B6D4"
            items={items}
            filters={filters}
        />
    );
}
