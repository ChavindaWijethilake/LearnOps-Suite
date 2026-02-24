import ResourceListPage from '../../components/resource-list-page';
import { ClipboardCheck } from 'lucide-react';

const items = [
    { id: 1, title: 'Final Examination Regulations 2025', description: 'Official exam conduct rules, allowed materials, and academic integrity policies.', course: 'General', year: '2025', semester: '1', category: 'Regulations', format: 'PDF', date: '1 month ago', downloads: 456, size: '1.2 MB' },
    { id: 2, title: 'Mid-Semester Exam Timetable', description: 'Complete timetable for all mid-semester examinations with venue allocations.', course: 'General', year: '2025', semester: '1', category: 'Timetable', format: 'PDF', date: '2 weeks ago', downloads: 789, size: '0.5 MB' },
    { id: 3, title: 'Online Exam Procedures', description: 'Step-by-step guide for online exam platforms, technical requirements, and troubleshooting.', course: 'General', year: '2025', semester: '2', category: 'Guide', format: 'PDF', date: '3 days ago', downloads: 234, size: '2.1 MB' },
];

const filters = {
    courses: ['General', 'Computer Science', 'Mathematics', 'Engineering'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Regulations', 'Timetable', 'Guide', 'Notice'],
};

export default function ExamGuidelinesPage() {
    return (<ResourceListPage title="Exam Guidelines" subtitle="Examination regulations, timetables, and procedural guides." icon={ClipboardCheck} accentColor="#EF4444" items={items} filters={filters} />);
}
