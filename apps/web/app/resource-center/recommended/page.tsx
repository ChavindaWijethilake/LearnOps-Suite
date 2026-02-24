import ResourceListPage from '../components/resource-list-page';
import { Sparkles } from 'lucide-react';

const items = [
    { id: 1, title: 'Introduction to Machine Learning Notes', description: 'Recommended based on your course enrollment and browsing history.', course: 'Computer Science', year: '2025', semester: '1', category: 'Trending', format: 'PDF', date: 'Recommended', downloads: 312, size: '6.1 MB' },
    { id: 2, title: 'Cloud Computing Architecture Overview', description: 'Popular among students in your department — highly rated presentation slides.', course: 'Computer Science', year: '2025', semester: '1', category: 'Popular', format: 'PPTX', date: 'Recommended', downloads: 312, size: '18 MB' },
    { id: 3, title: 'Full Stack Project Boilerplate', description: 'Based on your recent project activity — downloadable starter code.', course: 'Computer Science', year: '2025', semester: '1', category: 'For You', format: 'ZIP', date: 'Recommended', downloads: 567, size: '45 MB' },
    { id: 4, title: 'Linear Algebra Formula Sheet', description: 'Frequently downloaded by students taking similar modules.', course: 'Mathematics', year: '2025', semester: '2', category: 'Trending', format: 'PDF', date: 'Recommended', downloads: 189, size: '1.8 MB' },
];

const filters = {
    courses: ['Computer Science', 'Mathematics', 'Physics', 'Business'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Trending', 'Popular', 'For You', 'New'],
};

export default function RecommendedPage() {
    return (<ResourceListPage title="Recommended For You" subtitle="Personalized recommendations based on your courses, interests, and activity." icon={Sparkles} accentColor="#10B981" items={items} filters={filters} />);
}
