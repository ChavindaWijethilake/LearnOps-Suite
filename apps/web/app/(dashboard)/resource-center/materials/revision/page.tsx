import ResourceListPage from '../../components/resource-list-page';
import { RotateCcw } from 'lucide-react';

const items = [
    { id: 1, title: 'Data Structures – Quick Revision Notes', description: 'Condensed revision notes covering all key algorithms, complexities, and data structures.', course: 'Computer Science', year: '2025', semester: '1', category: 'Revision Notes', format: 'PDF', date: '5 days ago', downloads: 678, size: '3.2 MB' },
    { id: 2, title: 'Calculus Formula Cheat Sheet', description: 'One-page formula reference for derivatives, integrals, and series.', course: 'Mathematics', year: '2025', semester: '1', category: 'Cheat Sheet', format: 'PDF', date: '1 week ago', downloads: 890, size: '0.5 MB' },
    { id: 3, title: 'Physics – Key Concepts Flashcards', description: 'Digital flashcard set for mechanics, thermodynamics, and electromagnetism.', course: 'Physics', year: '2024', semester: '2', category: 'Flashcards', format: 'PDF', date: '2 weeks ago', downloads: 456, size: '2.1 MB' },
    { id: 4, title: 'Business Management Summary Guide', description: 'Chapter-by-chapter summary with key takeaways and exam tips.', course: 'Business', year: '2025', semester: '2', category: 'Summary', format: 'PDF', date: '3 days ago', downloads: 345, size: '1.8 MB' },
];

const filters = {
    courses: ['Computer Science', 'Mathematics', 'Physics', 'Business', 'Engineering'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Revision Notes', 'Cheat Sheet', 'Flashcards', 'Summary', 'Mind Map'],
};

export default function RevisionMaterialsPage() {
    return (<ResourceListPage title="Revision Materials" subtitle="Quick revision notes, cheat sheets, flashcards, and summary guides." icon={RotateCcw} accentColor="#D946EF" items={items} filters={filters} />);
}
