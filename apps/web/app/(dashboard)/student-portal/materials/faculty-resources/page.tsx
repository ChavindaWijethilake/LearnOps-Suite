import ResourceListPage from '../../components/resource-list-page';
import { GraduationCap } from 'lucide-react';

const items = [
    { id: 1, title: 'Teaching Methodologies Handbook', description: 'Best practices for interactive teaching, assessment design, and student engagement.', course: 'General', year: '2025', semester: '1', category: 'Handbook', format: 'PDF', date: '1 month ago', downloads: 89, size: '4.2 MB' },
    { id: 2, title: 'Grading Rubric Templates', description: 'Standardized rubric templates for assignments, presentations, and lab reports.', course: 'General', year: '2025', semester: '1', category: 'Template', format: 'DOCX', date: '2 weeks ago', downloads: 145, size: '1.5 MB' },
    { id: 3, title: 'Research Supervision Guidelines', description: 'Faculty guide for supervising undergraduate and postgraduate research projects.', course: 'General', year: '2024', semester: '2', category: 'Guidelines', format: 'PDF', date: '3 months ago', downloads: 67, size: '2.8 MB' },
];

const filters = {
    courses: ['General', 'Computer Science', 'Mathematics', 'Engineering'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Handbook', 'Template', 'Guidelines', 'Training Material'],
};

export default function FacultyResourcesPage() {
    return (<ResourceListPage title="Faculty Resources" subtitle="Teaching materials, grading rubrics, and supervision guidelines for faculty." icon={GraduationCap} accentColor="#6366F1" items={items} filters={filters} />);
}
