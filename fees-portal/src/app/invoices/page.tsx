import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function InvoicesPage() {
  const invoices = [
    { id: 1, amount: '$5,000', term: 'Fall 2025', dueDate: '2025-09-01', status: 'paid' },
    { id: 2, amount: '$5,500', term: 'Spring 2026', dueDate: '2026-01-15', status: 'pending' },
    { id: 3, amount: '$5,000', term: 'Summer 2026', dueDate: '2026-06-01', status: 'upcoming' },
  ]

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Invoices & Fees</h1>
          <p className="text-muted-foreground mt-2">View and manage your invoices</p>
        </div>

        <div className="space-y-4">
          {invoices.map((invoice) => (
            <Card key={invoice.id}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{invoice.amount}</h3>
                    <p className="text-sm text-muted-foreground">{invoice.term}</p>
                    <p className="text-sm text-muted-foreground">Due: {invoice.dueDate}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Badge>{invoice.status}</Badge>
                    {invoice.status === 'pending' && (
                      <Button size="sm">Pay Now</Button>
                    )}
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
