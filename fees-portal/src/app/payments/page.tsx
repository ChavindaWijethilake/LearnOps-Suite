import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function PaymentsPage() {
  const payments = [
    { id: 1, amount: '$5,000', date: '2025-09-05', method: 'Credit Card', receipt: '#REC001' },
    { id: 2, amount: '$2,500', date: '2025-10-15', method: 'Bank Transfer', receipt: '#REC002' },
    { id: 3, amount: '$2,500', date: '2025-11-01', method: 'Credit Card', receipt: '#REC003' },
  ]

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Payment History</h1>
          <p className="text-muted-foreground mt-2">View your past payments and receipts</p>
        </div>

        <div className="space-y-4">
          {payments.map((payment) => (
            <Card key={payment.id}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{payment.amount}</h3>
                    <p className="text-sm text-muted-foreground">Date: {payment.date}</p>
                    <p className="text-sm text-muted-foreground">Method: {payment.method}</p>
                    <p className="text-sm text-muted-foreground">Receipt: {payment.receipt}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Paid</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
