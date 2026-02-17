import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function DropoutRiskPage() {
  const riskStudents = [
    { id: 1, name: 'Student A', riskLevel: 'high', factors: 'Low attendance, unpaid fees', action: 'flag' },
    { id: 2, name: 'Student B', riskLevel: 'medium', factors: 'Missing submissions', action: 'monitor' },
    { id: 3, name: 'Student C', riskLevel: 'low', factors: 'On track', action: 'none' },
    { id: 4, name: 'Student D', riskLevel: 'high', factors: 'Low grades, absenteeism', action: 'flag' },
  ]

  const getRiskColor = (level: string) => {
    switch(level) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dropout Risk Monitoring</h1>
          <p className="text-muted-foreground mt-2">Identify at-risk students and intervention opportunities</p>
        </div>

        <div className="space-y-4">
          {riskStudents.map((student) => (
            <Card key={student.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{student.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2">Risk Factors: {student.factors}</p>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <Badge className={getRiskColor(student.riskLevel)}>
                      {student.riskLevel.charAt(0).toUpperCase() + student.riskLevel.slice(1)} Risk
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
