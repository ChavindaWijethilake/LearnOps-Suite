import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function DisbursementsPage() {
  const disbursements = [
    { id: 1, amount: '$2,000', type: 'Merit Scholarship', date: '2025-09-10', status: 'processed' },
    { id: 2, amount: '$1,500', type: 'Need-Based Grant', date: '2025-10-15', status: 'processed' },
    { id: 3, amount: '$2,500', type: 'STEM Excellence', date: '2026-01-20', status: 'pending' },
  ]

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Disbursements</h1>
          <p className="text-muted-foreground mt-2">Track your scholarship and grant disbursements</p>
        </div>

        <div className="space-y-4">
          {disbursements.map((disbursement) => (
            <Card key={disbursement.id}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{disbursement.amount}</h3>
                    <p className="text-sm text-muted-foreground">{disbursement.type}</p>
                    <p className="text-sm text-muted-foreground">Date: {disbursement.date}</p>
                  </div>
                  <Badge>{disbursement.status}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
