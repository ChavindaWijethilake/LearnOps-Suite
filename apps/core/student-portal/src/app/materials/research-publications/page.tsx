import ResourceListPage from '../../components/resource-list-page';
import { FileSearch } from 'lucide-react';

const items = [
    { id: 1, title: 'Machine Learning in Education – Survey Paper', description: 'Published survey on AI/ML applications in higher education pedagogical systems.', course: 'Computer Science', year: '2025', semester: '1', category: 'Survey', format: 'PDF', date: '2 weeks ago', downloads: 234, size: '2.8 MB' },
    { id: 2, title: 'Renewable Energy Storage – Journal Article', description: 'Peer-reviewed article on novel battery technologies for solar energy storage.', course: 'Engineering', year: '2024', semester: '2', category: 'Journal Article', format: 'PDF', date: '1 month ago', downloads: 156, size: '3.5 MB' },
    { id: 3, title: 'Consumer Psychology in Digital Markets', description: 'Research paper analyzing online consumer behavior patterns and decision triggers.', course: 'Business', year: '2025', semester: '1', category: 'Research Paper', format: 'PDF', date: '3 weeks ago', downloads: 198, size: '2.1 MB' },
    { id: 4, title: 'Quantum Error Correction Advances', description: 'Conference paper on topological error correction codes for quantum computing.', course: 'Physics', year: '2024', semester: '2', category: 'Conference Paper', format: 'PDF', date: '2 months ago', downloads: 89, size: '1.9 MB' },
];

const filters = {
    courses: ['Computer Science', 'Engineering', 'Business', 'Physics', 'Chemistry'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Survey', 'Journal Article', 'Research Paper', 'Conference Paper', 'Thesis'],
};

export default function ResearchPublicationsPage() {
    return (<ResourceListPage title="Research Publications" subtitle="Published research papers, journal articles, and conference proceedings." icon={FileSearch} accentColor="#3B82F6" items={items} filters={filters} />);
}
