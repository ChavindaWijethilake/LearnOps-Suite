import ResourceListPage from '../../components/resource-list-page';
import { Calendar } from 'lucide-react';

const items = [
    { id: 1, title: 'CS301 – Data Structures Study Plan', description: 'Week-by-week study plan with recommended readings, practice problems, and milestones.', course: 'Computer Science', year: '2025', semester: '1', category: 'Study Plan', format: 'PDF', date: '1 week ago', downloads: 345, size: '1.2 MB' },
    { id: 2, title: 'Final Exam Revision Timetable', description: 'Optimized revision schedule covering all modules with break intervals.', course: 'General', year: '2025', semester: '2', category: 'Timetable', format: 'PDF', date: '3 days ago', downloads: 567, size: '0.8 MB' },
    { id: 3, title: 'MATH201 – Linear Algebra Roadmap', description: 'Progressive learning roadmap from basics to advanced topics with self-assessments.', course: 'Mathematics', year: '2025', semester: '1', category: 'Roadmap', format: 'PDF', date: '2 weeks ago', downloads: 234, size: '1.1 MB' },
];

const filters = {
    courses: ['Computer Science', 'Mathematics', 'Business', 'Physics', 'General'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Study Plan', 'Timetable', 'Roadmap', 'Checklist'],
};

export default function StudyPlansPage() {
    return (<ResourceListPage title="Study Plans" subtitle="Structured study plans, revision timetables, and learning roadmaps." icon={Calendar} accentColor="#06B6D4" items={items} filters={filters} />);
}
