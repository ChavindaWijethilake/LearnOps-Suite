import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function CoursesPage() {
  const courses = [
    { id: 1, name: 'Mathematics 101', instructor: 'Dr. Smith', students: 45, status: 'active' },
    { id: 2, name: 'Physics Advanced', instructor: 'Prof. Johnson', students: 32, status: 'active' },
    { id: 3, name: 'Chemistry Lab', instructor: 'Dr. Lee', students: 28, status: 'active' },
  ]

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Courses</h1>
          <p className="text-muted-foreground mt-2">View and manage your courses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{course.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                <p className="text-sm text-muted-foreground">Students: {course.students}</p>
                <Badge className="w-fit">{course.status}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
