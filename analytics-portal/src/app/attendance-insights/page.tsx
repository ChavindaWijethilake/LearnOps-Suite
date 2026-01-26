import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function AttendanceInsightsPage() {
  const attendanceCorrelation = [
    { course: 'Mathematics 101', avgAttendance: 90, avgGrade: 3.67, correlation: 'strong' },
    { course: 'Physics Advanced', avgAttendance: 83, avgGrade: 3.42, correlation: 'moderate' },
    { course: 'Chemistry Lab', avgAttendance: 94, avgGrade: 3.55, correlation: 'strong' },
    { course: 'English Composition', avgAttendance: 87, avgGrade: 3.78, correlation: 'strong' },
  ]

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Attendance Insights</h1>
          <p className="text-muted-foreground mt-2">Attendance and academic performance correlation</p>
        </div>

        <div className="space-y-4">
          {attendanceCorrelation.map((data, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold">{data.course}</h3>
                    <div className="mt-3 grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Attendance</p>
                        <p className="font-semibold">{data.avgAttendance}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Avg Grade</p>
                        <p className="font-semibold">{data.avgGrade.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Correlation</p>
                        <p className="font-semibold">{data.correlation}</p>
                      </div>
                    </div>
                  </div>
                  <Badge className="ml-4">Positive</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
