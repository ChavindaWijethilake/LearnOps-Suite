import ResourceListPage from '../../components/resource-list-page';
import { Mic } from 'lucide-react';

const items = [
    { id: 1, title: 'Machine Learning Podcast – Episode 12', description: 'Faculty discussion on the future of generative AI in education.', course: 'Computer Science', year: '2025', semester: '1', category: 'Podcast', format: 'MP3', date: '3 days ago', downloads: 178, size: '45 MB' },
    { id: 2, title: 'Organic Chemistry – Reaction Mechanisms Q&A', description: 'Recorded student discussion session on nucleophilic substitution.', course: 'Chemistry', year: '2025', semester: '2', category: 'Discussion', format: 'MP3', date: '1 week ago', downloads: 92, size: '38 MB' },
    { id: 3, title: 'Economics Round Table – Q1 2025', description: 'Faculty panel on global economic trends and their academic implications.', course: 'Business', year: '2025', semester: '1', category: 'Recorded Session', format: 'MP3', date: '2 weeks ago', downloads: 67, size: '52 MB' },
    { id: 4, title: 'Physics Problem Solving Session', description: 'Audio recording of a collaborative problem-solving workshop.', course: 'Physics', year: '2024', semester: '1', category: 'Recorded Session', format: 'MP3', date: '1 month ago', downloads: 54, size: '28 MB' },
];

const filters = {
    courses: ['Computer Science', 'Chemistry', 'Business', 'Physics'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Podcast', 'Discussion', 'Recorded Session'],
};

export default function AudioResourcesPage() {
    return (
        <ResourceListPage
            title="Audio Resources"
            subtitle="Podcasts, recorded sessions, and academic discussions."
            icon={Mic}
            accentColor="#F59E0B"
            items={items}
            filters={filters}
        />
    );
}
