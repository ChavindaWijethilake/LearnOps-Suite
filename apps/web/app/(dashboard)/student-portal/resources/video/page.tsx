import ResourceListPage from '../../components/resource-list-page';
import { Video } from 'lucide-react';

const items = [
    { id: 1, title: 'Introduction to Neural Networks – Lecture 1', description: 'Full recorded lecture covering perceptrons, activation functions, and backpropagation.', course: 'Computer Science', year: '2025', semester: '1', category: 'Lecture', format: 'MP4', date: '1 day ago', downloads: 456, size: '1.2 GB', author: 'Prof. Mendez' },
    { id: 2, title: 'Calculus III – Multivariable Integration', description: 'Tutorial covering double and triple integrals with visual demonstrations.', course: 'Mathematics', year: '2025', semester: '2', category: 'Tutorial', format: 'MP4', date: '3 days ago', downloads: 287, size: '890 MB' },
    { id: 3, title: 'Thermodynamics Lab Demonstration', description: 'Recorded lab session showing calorimetry experiments and data collection.', course: 'Physics', year: '2024', semester: '1', category: 'Recorded Class', format: 'MP4', date: '1 week ago', downloads: 134, size: '650 MB' },
    { id: 4, title: 'Microeconomics – Supply & Demand', description: 'Interactive lecture with real-world case studies on market equilibrium.', course: 'Business', year: '2025', semester: '1', category: 'Lecture', format: 'MP4', date: '5 days ago', downloads: 198, size: '980 MB' },
    { id: 5, title: 'React.js Crash Course', description: 'Hands-on tutorial building a complete project management application.', course: 'Computer Science', year: '2025', semester: '2', category: 'Tutorial', format: 'MP4', date: '2 weeks ago', downloads: 523, size: '1.5 GB' },
    { id: 6, title: 'Academic Writing Workshop', description: 'Faculty-led workshop on research paper structure and citation standards.', course: 'General', year: '2024', semester: '2', category: 'Recorded Class', format: 'MP4', date: '1 month ago', downloads: 89, size: '420 MB' },
];

const filters = {
    courses: ['Computer Science', 'Mathematics', 'Physics', 'Business', 'General'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Lecture', 'Tutorial', 'Recorded Class'],
};

export default function VideoResourcesPage() {
    return (
        <ResourceListPage
            title="Video Resources"
            subtitle="Recorded lectures, tutorials, and class sessions from across departments."
            icon={Video}
            accentColor="#6366F1"
            items={items}
            filters={filters}
        />
    );
}
