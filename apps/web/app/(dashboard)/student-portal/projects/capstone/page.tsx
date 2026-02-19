import ProjectListPage from '../../components/project-list-page';
import { Award } from 'lucide-react';

const items = [
    { id: 1, title: 'AI-Powered Academic Advisor', description: 'Capstone project building an NLP-based chatbot to advise students on course selection and career paths.', techStack: ['Python', 'TensorFlow', 'FastAPI', 'React'], contributors: ['Amal Fernando', 'Nisha Perera'], course: 'Computer Science', year: '2024', githubUrl: '#', externalUrl: '#', hasReport: true, date: '3 months ago', status: 'completed' as const },
    { id: 2, title: 'Autonomous Drone Navigation', description: 'Embedded systems capstone for autonomous drone pathfinding using computer vision.', techStack: ['C++', 'ROS', 'OpenCV', 'Python'], contributors: ['Kasun Bandara', 'Malith Silva', 'Dineth Jayasuriya'], course: 'Engineering', year: '2024', githubUrl: '#', hasReport: true, date: '4 months ago', status: 'completed' as const },
    { id: 3, title: 'Sustainable Supply Chain Platform', description: 'Business capstone analyzing and optimizing supply chains for carbon footprint reduction.', techStack: ['Python', 'Tableau', 'PostgreSQL'], contributors: ['Tharushi Gamage', 'Sachini Dias'], course: 'Business', year: '2025', githubUrl: '#', hasReport: false, date: '1 week ago', status: 'in-progress' as const },
];

export default function CapstoneProjectsPage() {
    return (
        <ProjectListPage
            title="Capstone Projects"
            subtitle="Senior capstone projects demonstrating culminating academic achievement."
            icon={Award}
            accentColor="#F59E0B"
            items={items}
            years={['2025', '2024', '2023', '2022']}
            courses={['Computer Science', 'Engineering', 'Business', 'Design']}
        />
    );
}
