import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default function PerformancePage() {
  const performanceData = [
    { subject: 'Mathematics', avgGrade: 3.67, passRate: 95, students: 120 },
    { subject: 'Physics', avgGrade: 3.42, passRate: 88, students: 95 },
    { subject: 'Chemistry', avgGrade: 3.55, passRate: 92, students: 110 },
    { subject: 'English', avgGrade: 3.78, passRate: 97, students: 130 },
  ]

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Performance Analytics</h1>
          <p className="text-muted-foreground mt-2">Subject-wise performance metrics</p>
        </div>

        <div className="space-y-4">
          {performanceData.map((data, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{data.subject}</h3>
                    <span className="text-sm font-bold text-primary">{data.avgGrade.toFixed(2)} GPA</span>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Pass Rate</span>
                      <span>{data.passRate}%</span>
                    </div>
                    <Progress value={data.passRate} />
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {data.students} students enrolled
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
