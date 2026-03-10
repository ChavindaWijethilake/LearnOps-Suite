import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect to portals command center
  redirect('/portals');
}
