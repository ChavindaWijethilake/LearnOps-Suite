import ResourceListPage from '../../components/resource-list-page';
import { CheckSquare } from 'lucide-react';

const items = [
    { id: 1, title: 'CS301 – Data Structures Marking Scheme', description: 'Detailed marking criteria and model answers for the final examination.', course: 'Computer Science', year: '2024', semester: '2', category: 'Final Exam', format: 'PDF', date: 'Archived', downloads: 345, size: '1.8 MB' },
    { id: 2, title: 'MATH201 – Linear Algebra Marking Guide', description: 'Step-by-step solution guide with mark allocation for each question.', course: 'Mathematics', year: '2024', semester: '2', category: 'Final Exam', format: 'PDF', date: 'Archived', downloads: 267, size: '1.4 MB' },
    { id: 3, title: 'BUS101 – Business Studies Coursework Rubric', description: 'Marking rubric for individual and group coursework submissions.', course: 'Business', year: '2025', semester: '1', category: 'Coursework', format: 'PDF', date: '1 week ago', downloads: 189, size: '0.8 MB' },
];

const filters = {
    courses: ['Computer Science', 'Mathematics', 'Business', 'Engineering', 'Physics'],
    years: ['2025', '2024', '2023'],
    semesters: ['1', '2'],
    categories: ['Final Exam', 'Mid-Semester', 'Coursework', 'Lab Report'],
};

export default function MarkingSchemesPage() {
    return (<ResourceListPage title="Marking Schemes" subtitle="Grading criteria, model answers, and marking rubrics for assessments." icon={CheckSquare} accentColor="#F59E0B" items={items} filters={filters} />);
}
