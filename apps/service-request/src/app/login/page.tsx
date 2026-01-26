'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GlassButton } from '@edu/ui';

export default function LoginPage() {
  const [email, setEmail] = useState('student@example.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Login failed');
        return;
      }

      router.push('/app');
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-center mb-2 text-blue-700">Service Request</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Sign in to your account</p>

          {error && <div className="bg-red-500/20 border border-red-500/30 text-red-700 px-4 py-3 rounded-lg mb-6">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-blue-400 transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-blue-400 transition"
                placeholder="password"
              />
            </div>

            <GlassButton
              type="submit"
              disabled={loading}
              appColor="blue"
              size="lg"
              className="w-full"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </GlassButton>
          </form>

          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm text-blue-700">
            <strong>Demo Credentials:</strong>
            <p>Email: student@example.com</p>
            <p>Password: password123</p>
          </div>
        </div>
      </div>
    </div>
  );
}
