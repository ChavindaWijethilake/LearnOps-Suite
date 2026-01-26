import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function AssignmentsPage() {
  const assignments = [
    { id: 1, title: 'Problem Set 1', course: 'Mathematics 101', dueDate: '2026-02-15', status: 'pending' },
    { id: 2, title: 'Lab Report', course: 'Physics Advanced', dueDate: '2026-02-10', status: 'submitted' },
    { id: 3, title: 'Essay Review', course: 'Chemistry Lab', dueDate: '2026-02-20', status: 'graded' },
  ]

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Assignments</h1>
          <p className="text-muted-foreground mt-2">Track your assignments and submissions</p>
        </div>

        <div className="space-y-4">
          {assignments.map((assignment) => (
            <Card key={assignment.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold">{assignment.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{assignment.course}</p>
                    <p className="text-sm text-muted-foreground">Due: {assignment.dueDate}</p>
                  </div>
                  <Badge className="w-fit">{assignment.status}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
