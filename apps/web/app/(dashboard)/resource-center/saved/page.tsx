import ResourceListPage from '../components/resource-list-page';
import { Bookmark } from 'lucide-react';

const items = [
    { id: 1, title: 'Advanced Data Structures Study Guide', description: 'Comprehensive notes covering trees, graphs, and hash tables.', course: 'Computer Science', year: '2025', semester: '1', category: 'Notes', format: 'PDF', date: 'Saved 2d ago', downloads: 234, size: '4.2 MB' },
    { id: 2, title: 'Calculus Formula Cheat Sheet', description: 'One-page formula reference for derivatives, integrals, and series.', course: 'Mathematics', year: '2025', semester: '1', category: 'Cheat Sheet', format: 'PDF', date: 'Saved 1w ago', downloads: 890, size: '0.5 MB' },
    { id: 3, title: 'React.js Crash Course', description: 'Hands-on tutorial building a complete project management application.', course: 'Computer Science', year: '2025', semester: '2', category: 'Tutorial', format: 'MP4', date: 'Saved 3d ago', downloads: 523, size: '1.5 GB' },
];

const filters = {
    courses: ['Computer Science', 'Mathematics', 'Physics', 'Business'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Notes', 'Cheat Sheet', 'Tutorial', 'Lecture', 'Lab Manual'],
};

export default function SavedResourcesPage() {
    return (<ResourceListPage title="Saved Resources" subtitle="Resources you've bookmarked for quick access." icon={Bookmark} accentColor="#F59E0B" items={items} filters={filters} />);
}
