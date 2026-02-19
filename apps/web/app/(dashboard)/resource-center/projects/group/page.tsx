import ProjectListPage from '../../components/project-list-page';
import { Users } from 'lucide-react';

const items = [
    { id: 1, title: 'Campus Event Management System', description: 'Collaborative platform for organizing, promoting, and managing campus events with RSVP and ticketing.', techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe'], contributors: ['Amal Fernando', 'Nisha Perera', 'Dineth Jayasuriya'], course: 'Computer Science', year: '2025', githubUrl: '#', externalUrl: '#', hasReport: true, date: '2 weeks ago', status: 'completed' as const },
    { id: 2, title: 'Smart Parking Solution', description: 'IoT-based parking management system with real-time availability tracking and mobile booking.', techStack: ['Arduino', 'React Native', 'Firebase', 'MQTT'], contributors: ['Kasun Bandara', 'Sachini Dias', 'Hasitha Perera', 'Malith Silva'], course: 'Engineering', year: '2024', githubUrl: '#', hasReport: true, date: '1 month ago', status: 'completed' as const },
    { id: 3, title: 'Library Digital Catalog', description: 'Digital catalog system with barcode scanning, search, and reservation features.', techStack: ['Vue.js', 'Express', 'MySQL'], contributors: ['Tharushi Gamage', 'Ruvini De Silva'], course: 'Computer Science', year: '2025', githubUrl: '#', hasReport: false, date: '5 days ago', status: 'in-progress' as const },
];

export default function GroupProjectsPage() {
    return (
        <ProjectListPage
            title="Group Projects"
            subtitle="Collaborative team projects across multiple disciplines."
            icon={Users}
            accentColor="#6366F1"
            items={items}
            years={['2025', '2024', '2023']}
            courses={['Computer Science', 'Engineering', 'Business', 'Design']}
        />
    );
}
