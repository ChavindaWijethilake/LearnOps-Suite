import ProjectListPage from '../../components/project-list-page';
import { Github } from 'lucide-react';

const items = [
    { id: 1, title: 'LearnOps UI Component Library', description: 'Open source React component library built by students for the university portal ecosystem.', techStack: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS'], contributors: ['Amal Fernando', 'Nisha Perera', 'Kavindu Silva'], course: 'Computer Science', year: '2025', githubUrl: '#', externalUrl: '#', hasReport: false, date: '3 days ago', status: 'in-progress' as const },
    { id: 2, title: 'Campus Map Accessibility Plugin', description: 'Open source browser extension for accessible campus navigation with screen reader support.', techStack: ['JavaScript', 'Chrome API', 'Mapbox'], contributors: ['Tharushi Gamage', 'Hasitha Perera'], course: 'Computer Science', year: '2024', githubUrl: '#', hasReport: true, date: '2 months ago', status: 'completed' as const },
    { id: 3, title: 'Academic Paper Citation Formatter', description: 'CLI tool for auto-formatting citations in APA, MLA, and Chicago styles.', techStack: ['Python', 'Click', 'PyPI'], contributors: ['Ruvini De Silva'], course: 'Computer Science', year: '2025', githubUrl: '#', hasReport: false, date: '1 week ago', status: 'in-progress' as const },
];

export default function OpenSourcePage() {
    return (
        <ProjectListPage
            title="Open Source Contributions"
            subtitle="Student and faculty open source projects available for collaboration."
            icon={Github}
            accentColor="#14B8A6"
            items={items}
            years={['2025', '2024', '2023']}
            courses={['Computer Science', 'Engineering', 'Design']}
        />
    );
}
