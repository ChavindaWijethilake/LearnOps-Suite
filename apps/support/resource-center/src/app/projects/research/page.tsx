import ProjectListPage from '../../components/project-list-page';
import { Microscope } from 'lucide-react';

const items = [
    { id: 1, title: 'Federated Learning for Healthcare Data', description: 'Research project exploring privacy-preserving machine learning across hospital networks.', techStack: ['Python', 'PyTorch', 'Flower Framework'], contributors: ['Dr. Mendez', 'Amal Fernando'], course: 'Computer Science', year: '2025', githubUrl: '#', hasReport: true, date: '1 month ago', status: 'in-progress' as const },
    { id: 2, title: 'Quantum Computing Algorithm Benchmarks', description: 'Comparative study of quantum vs classical algorithms for optimization problems.', techStack: ['Qiskit', 'Python', 'LaTeX'], contributors: ['Dr. Perera', 'Kasun Bandara'], course: 'Physics', year: '2024', hasReport: true, date: '3 months ago', status: 'completed' as const },
    { id: 3, title: 'Biodegradable Electronic Sensors', description: 'Material science research on creating environmentally-friendly sensor components.', techStack: ['MATLAB', 'CAD', 'Lab Equipment'], contributors: ['Dr. Silva', 'Sachini Dias', 'Malith Silva'], course: 'Engineering', year: '2025', hasReport: true, date: '2 weeks ago', status: 'in-progress' as const },
];

export default function ResearchProjectsPage() {
    return (
        <ProjectListPage
            title="Research Projects"
            subtitle="Faculty-led and student research initiatives across departments."
            icon={Microscope}
            accentColor="#EC4899"
            items={items}
            years={['2025', '2024', '2023']}
            courses={['Computer Science', 'Physics', 'Engineering', 'Chemistry', 'Business']}
        />
    );
}
