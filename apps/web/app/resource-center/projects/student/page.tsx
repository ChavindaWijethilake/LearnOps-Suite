import ProjectListPage from '../../components/project-list-page';
import { User } from 'lucide-react';

const items = [
    { id: 1, title: 'Personal Finance Tracker', description: 'A React-based personal finance application with budget tracking, expense categorization, and visual analytics dashboards.', techStack: ['React', 'Node.js', 'MongoDB', 'Chart.js'], contributors: ['Amal Fernando'], course: 'Computer Science', year: '2025', githubUrl: '#', externalUrl: '#', hasReport: true, date: '1 week ago', status: 'completed' as const },
    { id: 2, title: 'Weather Forecast CLI Tool', description: 'Command-line weather tool using OpenWeatherMap API with caching and offline support.', techStack: ['Python', 'REST API', 'SQLite'], contributors: ['Nisha Perera'], course: 'Computer Science', year: '2024', githubUrl: '#', hasReport: true, date: '2 months ago', status: 'completed' as const },
    { id: 3, title: 'Portfolio Website Generator', description: 'Automated portfolio website generator from a JSON configuration file.', techStack: ['Next.js', 'Tailwind CSS', 'Vercel'], contributors: ['Kavindu Silva'], course: 'Computer Science', year: '2025', githubUrl: '#', externalUrl: '#', hasReport: false, date: '3 days ago', status: 'in-progress' as const },
];

export default function StudentProjectsPage() {
    return (
        <ProjectListPage
            title="Student Projects"
            subtitle="Individual student projects showcasing technical skills and creativity."
            icon={User}
            accentColor="#10B981"
            items={items}
            years={['2025', '2024', '2023']}
            courses={['Computer Science', 'Engineering', 'Design', 'Business']}
        />
    );
}
