import ResourceListPage from '../../components/resource-list-page';
import { Briefcase } from 'lucide-react';

const items = [
    { id: 1, title: 'Internship Application Guide 2025', description: 'Step-by-step guide for finding, applying, and securing internships.', course: 'General', year: '2025', semester: '1', category: 'Guide', format: 'PDF', date: '1 month ago', downloads: 567, size: '3.2 MB' },
    { id: 2, title: 'CV and Resume Templates', description: 'Professional resume templates optimized for tech, business, and engineering roles.', course: 'General', year: '2025', semester: '1', category: 'Template', format: 'DOCX', date: '2 weeks ago', downloads: 890, size: '2.5 MB' },
    { id: 3, title: 'Interview Preparation Handbook', description: 'Comprehensive guide covering behavioral, technical, and case study interviews.', course: 'General', year: '2025', semester: '2', category: 'Handbook', format: 'PDF', date: '1 week ago', downloads: 456, size: '4.8 MB' },
    { id: 4, title: 'Industry Partner Directory', description: 'List of approved internship partner companies with contact details and requirements.', course: 'General', year: '2025', semester: '1', category: 'Directory', format: 'PDF', date: '3 months ago', downloads: 234, size: '1.1 MB' },
];

const filters = {
    courses: ['General', 'Computer Science', 'Business', 'Engineering'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Guide', 'Template', 'Handbook', 'Directory'],
};

export default function InternshipResourcesPage() {
    return (<ResourceListPage title="Internship Resources" subtitle="Career preparation materials, application guides, and industry partner directories." icon={Briefcase} accentColor="#F97316" items={items} filters={filters} />);
}
