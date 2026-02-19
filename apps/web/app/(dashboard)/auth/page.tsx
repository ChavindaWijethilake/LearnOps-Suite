'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookOpen, DollarSign, BarChart3, Shield, Users, Zap } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              EP
            </div>
            <span className="text-xl font-semibold text-foreground">Education Portal</span>
          </div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Your Central Education Identity Hub
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
              Secure access to Learning Management, Fees, and Analytics. One login, full ecosystem access.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/login">
                <Button size="lg" className="text-base">
                  Login to Portal
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" variant="outline">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Connected Portals</h2>
            <p className="text-lg text-muted-foreground">Access all your education platforms from a single identity</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Learning Management System</h3>
              <p className="text-muted-foreground mb-6">
                Access courses, assignments, grades, and learning materials all in one place.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Learn More
              </Button>
            </div>

            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Fees & Scholarship</h3>
              <p className="text-muted-foreground mb-6">
                Manage payments, view invoices, and track scholarship applications securely.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Learn More
              </Button>
            </div>

            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Academic Analytics</h3>
              <p className="text-muted-foreground mb-6">
                Track performance, analyze progress, and gain insights into academic growth.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Enterprise Grade Security</h2>
            <p className="text-lg text-muted-foreground">Your education data is protected with institutional-level security</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Secure Authentication</h3>
              <p className="text-muted-foreground">End-to-end encrypted credentials and session management</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Role-Based Access</h3>
              <p className="text-muted-foreground">Customized permissions for students, teachers, and administrators</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Single Sign-On</h3>
              <p className="text-muted-foreground">Login once, access all connected education platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of students, teachers, and administrators using our education ecosystem.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/register">
              <Button size="lg" className="text-base">
                Create Your Account
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline">
                Already Have an Account?
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                  EP
                </div>
                <span className="font-semibold text-foreground">Education Portal</span>
              </div>
              <p className="text-sm text-muted-foreground">Central identity hub for the national education ecosystem.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Portals</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Learning Management</a></li>
                <li><a href="#" className="hover:text-foreground">Fees & Scholarship</a></li>
                <li><a href="#" className="hover:text-foreground">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2026 Education Portal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
