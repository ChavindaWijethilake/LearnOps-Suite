import ResourceListPage from '../../components/resource-list-page';
import { FileText } from 'lucide-react';

const items = [
    { id: 1, title: 'Advanced Data Structures Study Guide', description: 'Comprehensive notes covering trees, graphs, and hash tables with examples.', course: 'Computer Science', year: '2025', semester: '1', category: 'Notes', format: 'PDF', date: '2 days ago', downloads: 234, size: '4.2 MB', author: 'Dr. Silva' },
    { id: 2, title: 'Linear Algebra Formula Sheet', description: 'Quick reference guide for matrices, eigenvalues, and vector spaces.', course: 'Mathematics', year: '2025', semester: '2', category: 'Guide', format: 'PDF', date: '1 week ago', downloads: 189, size: '1.8 MB' },
    { id: 3, title: 'Organic Chemistry Lab Manual', description: 'Step-by-step procedures for all semester experiments and safety protocols.', course: 'Chemistry', year: '2025', semester: '1', category: 'Documentation', format: 'PDF', date: '3 days ago', downloads: 156, size: '12 MB' },
    { id: 4, title: 'Introduction to Machine Learning Notes', description: 'Lecture notes on supervised and unsupervised learning algorithms.', course: 'Computer Science', year: '2024', semester: '2', category: 'Notes', format: 'PDF', date: '2 weeks ago', downloads: 312, size: '6.1 MB' },
    { id: 5, title: 'Business Law Case Studies', description: 'Collection of landmark case studies for contract and corporate law.', course: 'Business', year: '2025', semester: '1', category: 'Guide', format: 'DOCX', date: '5 days ago', downloads: 98, size: '3.4 MB' },
    { id: 6, title: 'Physics Mechanics Problem Set', description: 'Curated problem set with detailed solutions for classical mechanics.', course: 'Physics', year: '2024', semester: '1', category: 'Notes', format: 'PDF', date: '1 month ago', downloads: 267, size: '2.9 MB' },
];

const filters = {
    courses: ['Computer Science', 'Mathematics', 'Chemistry', 'Physics', 'Business'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Notes', 'Guide', 'Documentation'],
};

export default function TextResourcesPage() {
    return (
        <ResourceListPage
            title="Text Resources"
            subtitle="PDFs, notes, guides, and documentation curated by faculty and students."
            icon={FileText}
            accentColor="#10B981"
            items={items}
            filters={filters}
        />
    );
}
