import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, BookOpen, Download, FileText, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function CourseDetailsPage({ params }: { params: { id: string } }) {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/courses">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Advanced Web Development</h2>
                    <p className="text-muted-foreground">CS-401 • Dr. Sarah Smith</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                            <PlayCircle className="h-16 w-16 text-muted-foreground/50" />
                        </div>
                        <CardHeader>
                            <CardTitle>Course Overview</CardTitle>
                            <CardDescription>
                                This course covers advanced concepts in web development including modern frameworks,
                                state management, and server-side rendering.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <h3 className="font-semibold">Modules</h3>
                                <div className="space-y-2">
                                    {[1, 2, 3, 4, 5].map((module) => (
                                        <div
                                            key={module}
                                            className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
                                                    {module}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-sm">Module {module}</p>
                                                    <p className="text-xs text-muted-foreground">2h 15m</p>
                                                </div>
                                            </div>
                                            <PlayCircle className="h-4 w-4 text-muted-foreground" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Progress</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground">Course Completion</span>
                                    <span className="font-medium">75%</span>
                                </div>
                                <Progress value={75} />
                            </div>
                            <div className="pt-4 border-t space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Grade</span>
                                    <span className="font-medium">A- (92%)</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Course Materials</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                                <Download className="h-4 w-4" />
                                <div className="text-left">
                                    <p className="text-sm font-medium">Syllabus.pdf</p>
                                    <p className="text-xs text-muted-foreground">2.4 MB</p>
                                </div>
                            </Button>
                            <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                                <FileText className="h-4 w-4" />
                                <div className="text-left">
                                    <p className="text-sm font-medium">Lecture Notes</p>
                                    <p className="text-xs text-muted-foreground">Link</p>
                                </div>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
