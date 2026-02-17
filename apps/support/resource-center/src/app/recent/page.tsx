import ResourceListPage from '../components/resource-list-page';
import { Clock } from 'lucide-react';

const items = [
    { id: 1, title: 'CS301 – Data Structures & Algorithms', description: 'Complete course pack including lecture notes, lab guides, and recommended reading list.', course: 'Computer Science', year: '2025', semester: '1', category: 'Course Pack', format: 'PDF', date: 'Viewed 1h ago', downloads: 567, size: '25 MB' },
    { id: 2, title: 'Machine Learning Podcast – Episode 12', description: 'Faculty discussion on the future of generative AI in education.', course: 'Computer Science', year: '2025', semester: '1', category: 'Podcast', format: 'MP3', date: 'Viewed 3h ago', downloads: 178, size: '45 MB' },
    { id: 3, title: 'Data Structures – Quick Revision Notes', description: 'Condensed revision notes covering all key algorithms and complexities.', course: 'Computer Science', year: '2025', semester: '1', category: 'Revision Notes', format: 'PDF', date: 'Viewed yesterday', downloads: 678, size: '3.2 MB' },
];

const filters = {
    courses: ['Computer Science', 'Mathematics', 'Physics', 'Business'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Course Pack', 'Podcast', 'Revision Notes', 'Lecture', 'Lab Manual'],
};

export default function RecentlyAccessedPage() {
    return (<ResourceListPage title="Recently Accessed" subtitle="Resources you've recently viewed or downloaded." icon={Clock} accentColor="#6366F1" items={items} filters={filters} />);
}
