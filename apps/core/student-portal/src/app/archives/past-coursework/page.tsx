'use client';

import ResourceListPage from '../../components/resource-list-page';
import { BookOpen } from 'lucide-react';

const items = [
    { id: 1, title: 'Web Development – Portfolio Project', description: 'Coursework requiring students to build a responsive portfolio using modern frameworks.', course: 'Computer Science', year: '2024', semester: '2', category: 'Individual', format: 'PDF', date: 'Archived', downloads: 345, size: '5.6 MB' },
    { id: 2, title: 'Statistical Analysis Report – Climate Data', description: 'Data analysis coursework using R to study climate patterns over the last decade.', course: 'Mathematics', year: '2025', semester: '1', category: 'Individual', format: 'PDF', date: 'Archived', downloads: 198, size: '3.2 MB' },
    { id: 3, title: 'Marketing Campaign Plan', description: 'Group coursework to develop a digital marketing campaign for a startup.', course: 'Business', year: '2024', semester: '2', category: 'Group', format: 'PDF', date: 'Archived', downloads: 267, size: '8.4 MB' },
    { id: 4, title: 'Circuit Design Lab Report', description: 'Lab-based coursework on designing and testing analog amplifier circuits.', course: 'Engineering', year: '2025', semester: '1', category: 'Lab Report', format: 'PDF', date: 'Archived', downloads: 156, size: '4.1 MB' },
];

const filters = {
    courses: ['Computer Science', 'Mathematics', 'Business', 'Engineering', 'Chemistry'],
    years: ['2025', '2024', '2023', '2022'],
    semesters: ['1', '2'],
    categories: ['Individual', 'Group', 'Lab Report', 'Research'],
};

export default function PastCourseworkPage() {
    return (
        <ResourceListPage
            title="Past Coursework"
            subtitle="Archived coursework submissions and exemplar responses."
            icon={BookOpen}
            accentColor="#F97316"
            items={items}
            filters={filters}
        />
    );
}
