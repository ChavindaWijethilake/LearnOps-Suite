import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default function AttendancePage() {
  const attendanceData = [
    { course: 'Mathematics 101', present: 18, total: 20, percentage: 90 },
    { course: 'Physics Advanced', present: 15, total: 18, percentage: 83 },
    { course: 'Chemistry Lab', present: 16, total: 17, percentage: 94 },
  ]

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Attendance</h1>
          <p className="text-muted-foreground mt-2">Your attendance record across courses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {attendanceData.map((data, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg">{data.course}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Attendance</span>
                    <span className="font-semibold">{data.percentage}%</span>
                  </div>
                  <Progress value={data.percentage} />
                </div>
                <p className="text-sm text-muted-foreground">
                  {data.present} out of {data.total} classes attended
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
