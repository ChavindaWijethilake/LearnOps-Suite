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
import { FileText, Filter } from "lucide-react";

const assignments = [
    {
        id: 1,
        title: "React Component Library",
        course: "Advanced Web Development",
        dueDate: "2024-03-15",
        status: "Pending",
        grade: "-",
    },
    {
        id: 2,
        title: "Algorithm Analysis Report",
        course: "Data Structures & Algorithms",
        dueDate: "2024-03-10",
        status: "Submitted",
        grade: "-",
    },
    {
        id: 3,
        title: "Database Schema Design",
        course: "Database Management Systems",
        dueDate: "2024-03-01",
        status: "Graded",
        grade: "95/100",
    },
    {
        id: 4,
        title: "Software Requirements Spec",
        course: "Software Engineering Principles",
        dueDate: "2024-02-28",
        status: "Late",
        grade: "88/100",
    },
    {
        id: 5,
        title: "API Integration Project",
        course: "Advanced Web Development",
        dueDate: "2024-03-20",
        status: "Pending",
        grade: "-",
    },
];

export default function AssignmentsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Assignments</h2>
                    <p className="text-muted-foreground">
                        Track and manage your academic tasks.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                    </Button>
                    <Button size="sm">New Submission</Button>
                </div>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Assignment</TableHead>
                            <TableHead>Course</TableHead>
                            <TableHead>Due Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Grade</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {assignments.map((assignment) => (
                            <TableRow key={assignment.id}>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-2">
                                        <FileText className="h-4 w-4 text-muted-foreground" />
                                        {assignment.title}
                                    </div>
                                </TableCell>
                                <TableCell>{assignment.course}</TableCell>
                                <TableCell>{assignment.dueDate}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            assignment.status === "Pending"
                                                ? "warning" // Using warning for pending (yellow)
                                                : assignment.status === "Submitted"
                                                    ? "secondary" // secondary for submitted
                                                    : assignment.status === "Graded"
                                                        ? "success" // success for graded (green)
                                                        : "destructive" // destructive for late (red)
                                        }
                                    >
                                        {assignment.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{assignment.grade}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm">
                                        View
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
