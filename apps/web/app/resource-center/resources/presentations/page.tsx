import ResourceListPage from '../../components/resource-list-page';
import { Presentation } from 'lucide-react';

const items = [
    { id: 1, title: 'Cloud Computing Architecture Overview', description: 'Faculty presentation on cloud service models and deployment strategies.', course: 'Computer Science', year: '2025', semester: '1', category: 'Lecture Slides', format: 'PPTX', date: '2 days ago', downloads: 312, size: '18 MB' },
    { id: 2, title: 'Marketing Strategy Frameworks', description: 'Comprehensive slide deck covering Porter\'s Five Forces and SWOT analysis.', course: 'Business', year: '2025', semester: '2', category: 'Lecture Slides', format: 'PPTX', date: '1 week ago', downloads: 198, size: '12 MB' },
    { id: 3, title: 'Quantum Mechanics – Wave Functions', description: 'Visual presentation with animated diagrams of quantum behavior.', course: 'Physics', year: '2024', semester: '1', category: 'Lecture Slides', format: 'PDF', date: '3 weeks ago', downloads: 145, size: '24 MB' },
    { id: 4, title: 'Database Design Patterns', description: 'Slides covering normalization, indexing strategies, and query optimization.', course: 'Computer Science', year: '2025', semester: '1', category: 'Tutorial Slides', format: 'PPTX', date: '5 days ago', downloads: 267, size: '8 MB' },
];

const filters = {
    courses: ['Computer Science', 'Business', 'Physics', 'Mathematics'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Lecture Slides', 'Tutorial Slides', 'Seminar Slides'],
};

export default function PresentationsPage() {
    return (
        <ResourceListPage
            title="Presentation Slides"
            subtitle="Lecture slides, tutorial decks, and seminar presentations."
            icon={Presentation}
            accentColor="#EC4899"
            items={items}
            filters={filters}
        />
    );
}
