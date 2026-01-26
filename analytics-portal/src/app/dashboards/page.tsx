import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function DashboardsPage() {
  const kpis = [
    { label: 'Average Grade', value: '3.45 GPA', change: '+0.15' },
    { label: 'Pass Rate', value: '92%', change: '+3%' },
    { label: 'Attendance Rate', value: '88%', change: '-2%' },
    { label: 'Submission Rate', value: '95%', change: '+5%' },
  ]

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Overview of key academic metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi, idx) => (
            <Card key={idx}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <p className="text-xs text-green-600 mt-2">{kpi.change} from last term</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
