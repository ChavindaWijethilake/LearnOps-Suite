import ResourceListPage from '../../components/resource-list-page';
import { BookMarked } from 'lucide-react';

const items = [
    { id: 1, title: 'Introduction to Algorithms – Cormen et al.', description: 'The definitive textbook on algorithms covering sorting, graphs, and computational complexity.', course: 'Computer Science', year: '2025', semester: '1', category: 'Textbook', format: 'PDF', date: 'Reference', downloads: 1234, size: '15 MB' },
    { id: 2, title: 'Calculus: Early Transcendentals – Stewart', description: 'Standard calculus textbook for single and multivariable calculus courses.', course: 'Mathematics', year: '2025', semester: '1', category: 'Textbook', format: 'PDF', date: 'Reference', downloads: 987, size: '22 MB' },
    { id: 3, title: 'Principles of Economics – Mankiw', description: 'Introductory economics text covering micro and macroeconomic principles.', course: 'Business', year: '2025', semester: '2', category: 'Textbook', format: 'PDF', date: 'Reference', downloads: 756, size: '18 MB' },
    { id: 4, title: 'Clean Code – Robert C. Martin', description: 'Industry-standard reference for writing maintainable and readable code.', course: 'Computer Science', year: '2025', semester: '1', category: 'Reference', format: 'PDF', date: 'Reference', downloads: 890, size: '8 MB' },
];

const filters = {
    courses: ['Computer Science', 'Mathematics', 'Business', 'Physics', 'Engineering'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Textbook', 'Reference', 'Supplementary Reading', 'Journal'],
};

export default function ReferenceBooksPage() {
    return (<ResourceListPage title="Reference Books" subtitle="Recommended textbooks, reference materials, and supplementary readings." icon={BookMarked} accentColor="#8B5CF6" items={items} filters={filters} />);
}
