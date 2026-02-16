import ResourceListPage from '../../components/resource-list-page';
import { FlaskConical } from 'lucide-react';

const items = [
    { id: 1, title: 'Chemistry Lab Manual – Organic Reactions', description: 'Complete lab manual for organic chemistry experiments with safety protocols.', course: 'Chemistry', year: '2025', semester: '1', category: 'Lab Manual', format: 'PDF', date: '1 month ago', downloads: 234, size: '8.5 MB' },
    { id: 2, title: 'Physics Lab – Optics Experiments', description: 'Guided experiments on light refraction, diffraction, and interference patterns.', course: 'Physics', year: '2025', semester: '1', category: 'Lab Manual', format: 'PDF', date: '2 weeks ago', downloads: 189, size: '6.2 MB' },
    { id: 3, title: 'Computer Networks Lab Guide', description: 'Hands-on lab exercises for TCP/IP, subnetting, and network security.', course: 'Computer Science', year: '2025', semester: '2', category: 'Lab Guide', format: 'PDF', date: '1 week ago', downloads: 312, size: '4.1 MB' },
    { id: 4, title: 'Electronics Lab – Circuit Design', description: 'Lab manual covering breadboard prototyping, oscilloscope usage, and circuit analysis.', course: 'Engineering', year: '2024', semester: '1', category: 'Lab Manual', format: 'PDF', date: '3 months ago', downloads: 156, size: '7.8 MB' },
];

const filters = {
    courses: ['Chemistry', 'Physics', 'Computer Science', 'Engineering', 'Biology'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Lab Manual', 'Lab Guide', 'Safety Protocol', 'Equipment Guide'],
};

export default function LabManualsPage() {
    return (<ResourceListPage title="Lab Manuals" subtitle="Laboratory manuals, experiment guides, and safety protocols." icon={FlaskConical} accentColor="#14B8A6" items={items} filters={filters} />);
}
