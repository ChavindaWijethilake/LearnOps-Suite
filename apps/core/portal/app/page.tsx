import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect to portal hub
  redirect('/portals');
}
