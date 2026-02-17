import ResourceListPage from '../../components/resource-list-page';
import { BookOpen } from 'lucide-react';

const items = [
    { id: 1, title: 'CS301 – Data Structures & Algorithms', description: 'Complete course pack including lecture notes, lab guides, and recommended reading list.', course: 'Computer Science', year: '2025', semester: '1', category: 'Lecture Notes', format: 'PDF', date: '1 week ago', downloads: 567, size: '25 MB' },
    { id: 2, title: 'MATH201 – Linear Algebra', description: 'Full semester materials with problem sets, solutions, and exam preparation guides.', course: 'Mathematics', year: '2025', semester: '1', category: 'Course Pack', format: 'PDF', date: '2 weeks ago', downloads: 434, size: '18 MB' },
    { id: 3, title: 'BUS101 – Introduction to Business', description: 'Course materials including case studies, lecture slides, and group discussion prompts.', course: 'Business', year: '2025', semester: '2', category: 'Lecture Notes', format: 'PDF', date: '3 days ago', downloads: 312, size: '15 MB' },
    { id: 4, title: 'PHY202 – Electromagnetism', description: 'Comprehensive material set with theory, lab manuals, and supplementary videos.', course: 'Physics', year: '2024', semester: '2', category: 'Course Pack', format: 'PDF + ZIP', date: '1 month ago', downloads: 289, size: '42 MB' },
];

const filters = {
    courses: ['Computer Science', 'Mathematics', 'Business', 'Physics', 'Chemistry', 'Engineering'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Lecture Notes', 'Course Pack', 'Syllabus', 'Reading List'],
};

export default function CourseMaterialsPage() {
    return (<ResourceListPage title="Course Materials" subtitle="Organized course materials by module — lecture notes, syllabi, and reading lists." icon={BookOpen} accentColor="#10B981" items={items} filters={filters} />);
}
