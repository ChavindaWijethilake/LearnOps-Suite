import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function ExamsPage() {
  const exams = [
    { id: 1, name: 'Midterm Exam', course: 'Mathematics 101', date: '2026-03-01', time: '09:00 AM', duration: '2 hours' },
    { id: 2, name: 'Final Exam', course: 'Physics Advanced', date: '2026-04-15', time: '02:00 PM', duration: '3 hours' },
    { id: 3, name: 'Practical Exam', course: 'Chemistry Lab', date: '2026-03-20', time: '10:00 AM', duration: '4 hours' },
  ]

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Exams</h1>
          <p className="text-muted-foreground mt-2">View your exam schedule</p>
        </div>

        <div className="space-y-4">
          {exams.map((exam) => (
            <Card key={exam.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold">{exam.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{exam.course}</p>
                    <div className="mt-3 text-sm space-y-1">
                      <p>Date: {exam.date}</p>
                      <p>Time: {exam.time}</p>
                      <p>Duration: {exam.duration}</p>
                    </div>
                  </div>
                  <Badge>Scheduled</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
