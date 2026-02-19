import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { GraduationCap, TrendingUp, Award } from "lucide-react";

const grades = [
    {
        course: "Advanced Web Development",
        code: "CS-401",
        credits: 4,
        midterm: "92",
        final: "-",
        current: 94,
        letter: "A",
    },
    {
        course: "Data Structures & Algorithms",
        code: "CS-302",
        credits: 3,
        midterm: "85",
        final: "-",
        current: 88,
        letter: "B+",
    },
    {
        course: "Database Management Systems",
        code: "CS-305",
        credits: 3,
        midterm: "78",
        final: "-",
        current: 82,
        letter: "B-",
    },
    {
        course: "Software Engineering Principles",
        code: "SE-400",
        credits: 3,
        midterm: "95",
        final: "-",
        current: 96,
        letter: "A",
    },
];

export default function GradesPage() {
    const gpa = 3.8;

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Grades</h2>
                    <p className="text-muted-foreground">
                        Monitor your academic performance and GPA.
                    </p>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Cumulative GPA</CardTitle>
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{gpa}</div>
                        <p className="text-xs text-muted-foreground">Top 10% of class</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Credits Earned</CardTitle>
                        <Award className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">85 / 120</div>
                        <p className="text-xs text-muted-foreground">70% Completion</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Class Rank</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12th</div>
                        <p className="text-xs text-muted-foreground">Out of 120 students</p>
                    </CardContent>
                </Card>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Course</TableHead>
                            <TableHead>Code</TableHead>
                            <TableHead>Credits</TableHead>
                            <TableHead>Midterm</TableHead>
                            <TableHead>Current %</TableHead>
                            <TableHead>Grade</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {grades.map((grade) => (
                            <TableRow key={grade.code}>
                                <TableCell className="font-medium">{grade.course}</TableCell>
                                <TableCell>{grade.code}</TableCell>
                                <TableCell>{grade.credits}</TableCell>
                                <TableCell>{grade.midterm}</TableCell>
                                <TableCell>{grade.current}%</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            grade.letter.startsWith("A")
                                                ? "success"
                                                : grade.letter.startsWith("B")
                                                    ? "secondary"
                                                    : "destructive"
                                        }
                                    >
                                        {grade.letter}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
