import { cookies } from 'next/headers';
import PortalDashboard from '@/components/dashboards/portal-dashboard';
import LoginPage from './login/page';

export default async function HomePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;

  if (token) {
    return <PortalDashboard />;
  }

  return <LoginPage />;
}
