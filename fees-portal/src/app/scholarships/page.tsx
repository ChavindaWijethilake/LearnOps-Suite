import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function ScholarshipsPage() {
  const scholarships = [
    { id: 1, name: 'Merit Scholarship', amount: '$2,000', status: 'awarded', term: 'Spring 2026' },
    { id: 2, name: 'Need-Based Grant', amount: '$1,500', status: 'applied', term: 'Fall 2025' },
    { id: 3, name: 'STEM Excellence', amount: '$2,500', status: 'available', term: 'Fall 2025' },
  ]

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Scholarships</h1>
          <p className="text-muted-foreground mt-2">Browse and manage scholarship opportunities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {scholarships.map((scholarship) => (
            <Card key={scholarship.id}>
              <CardHeader>
                <CardTitle className="text-lg">{scholarship.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-2xl font-bold">{scholarship.amount}</p>
                  <p className="text-sm text-muted-foreground">Term: {scholarship.term}</p>
                </div>
                <div className="flex gap-2">
                  <Badge>{scholarship.status}</Badge>
                  {scholarship.status === 'available' && (
                    <Button size="sm" variant="outline">Apply</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
