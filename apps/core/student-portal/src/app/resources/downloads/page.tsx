import ResourceListPage from '../../components/resource-list-page';
import { Download } from 'lucide-react';

const items = [
    { id: 1, title: 'Full Stack Project Boilerplate', description: 'Starter code for Next.js + PostgreSQL projects with authentication included.', course: 'Computer Science', year: '2025', semester: '1', category: 'Code', format: 'ZIP', date: '1 day ago', downloads: 567, size: '45 MB' },
    { id: 2, title: 'Design System Asset Pack', description: 'Complete Figma export with icons, typography, and component library.', course: 'Design', year: '2025', semester: '2', category: 'Assets', format: 'ZIP', date: '3 days ago', downloads: 234, size: '120 MB' },
    { id: 3, title: 'Statistics Dataset Collection', description: 'Cleaned datasets for regression analysis and hypothesis testing assignments.', course: 'Mathematics', year: '2024', semester: '1', category: 'Dataset', format: 'ZIP', date: '2 weeks ago', downloads: 189, size: '78 MB' },
    { id: 4, title: 'Android Development Toolkit', description: 'Pre-configured Android Studio project with common libraries and utilities.', course: 'Computer Science', year: '2025', semester: '1', category: 'Code', format: 'ZIP', date: '1 week ago', downloads: 145, size: '210 MB' },
];

const filters = {
    courses: ['Computer Science', 'Design', 'Mathematics', 'Engineering'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Code', 'Assets', 'Dataset', 'Templates'],
};

export default function DownloadsPage() {
    return (
        <ResourceListPage
            title="Downloadable Materials"
            subtitle="Code bundles, asset packs, datasets, and project templates."
            icon={Download}
            accentColor="#14B8A6"
            items={items}
            filters={filters}
        />
    );
}
