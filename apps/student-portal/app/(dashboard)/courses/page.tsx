import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Users } from "lucide-react";
import Link from "next/link";

const courses = [
    {
        id: 1,
        title: "Advanced Web Development",
        code: "CS-401",
        instructor: "Dr. Sarah Smith",
        progress: 75,
        nextClass: "Mon, 10:00 AM",
        thumbnail: "bg-blue-100",
    },
    {
        id: 2,
        title: "Data Structures & Algorithms",
        code: "CS-302",
        instructor: "Prof. John Doe",
        progress: 45,
        nextClass: "Tue, 02:00 PM",
        thumbnail: "bg-green-100",
    },
    {
        id: 3,
        title: "Database Management Systems",
        code: "CS-305",
        instructor: "Dr. Emily Chen",
        progress: 30,
        nextClass: "Wed, 11:30 AM",
        thumbnail: "bg-purple-100",
    },
    {
        id: 4,
        title: "Software Engineering Principles",
        code: "SE-400",
        instructor: "Prof. Michael Brown",
        progress: 90,
        nextClass: "Thu, 09:00 AM",
        thumbnail: "bg-orange-100",
    },
];

export default function CoursesPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Courses</h2>
                    <p className="text-muted-foreground">Manage your enrolled courses and track progress.</p>
                </div>
                <Button>Browse Course Catalog</Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <Card key={course.id} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
                        <div className={`h-32 w-full ${course.thumbnail} flex items-center justify-center`}>
                            <BookOpen className="h-12 w-12 text-primary/40" />
                        </div>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium px-2 py-1 rounded bg-secondary/10 text-secondary">
                                    {course.code}
                                </span>
                            </div>
                            <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                            <CardDescription>{course.instructor}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Progress</span>
                                        <span className="font-medium">{course.progress}%</span>
                                    </div>
                                    <Progress value={course.progress} />
                                </div>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        <span>{course.nextClass}</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-4 border-t bg-muted/20">
                            <Button asChild className="w-full">
                                <Link href={`/courses/${course.id}`}>View Course</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
