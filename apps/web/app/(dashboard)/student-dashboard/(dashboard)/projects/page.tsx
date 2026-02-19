import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Briefcase, Users, Plus } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        course: "Advanced Web Development",
        team: "Group A",
        deadline: "2024-04-15",
        status: "In Progress",
        progress: 60,
    },
    {
        id: 2,
        title: "Sorting Visualizer",
        course: "Data Structures & Algorithms",
        team: "Individual",
        deadline: "2024-03-25",
        status: "In Progress",
        progress: 30,
    },
    {
        id: 3,
        title: "University Database System",
        course: "Database Management Systems",
        team: "Group C",
        deadline: "2024-03-10",
        status: "Completed",
        progress: 100,
    },
];

export default function ProjectsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                    <p className="text-muted-foreground">
                        Collaborate on group projects and capstones.
                    </p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Project
                </Button>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Project Name</TableHead>
                            <TableHead>Course</TableHead>
                            <TableHead>Team</TableHead>
                            <TableHead>Deadline</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects.map((project) => (
                            <TableRow key={project.id}>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-2">
                                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                                        {project.title}
                                    </div>
                                </TableCell>
                                <TableCell>{project.course}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <Users className="h-3 w-3" />
                                        {project.team}
                                    </div>
                                </TableCell>
                                <TableCell>{project.deadline}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            project.status === "In Progress"
                                                ? "default"
                                                : "success"
                                        }
                                    >
                                        {project.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm">
                                        Manage
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
