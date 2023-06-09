import { headers } from 'next/headers';

import Login from '@/components/Login';

export default function Home() {
  const headersObj = headers();
  const userAgent = headersObj.get(`user-agent`);

  return (
    <main className="flex min-h-screen flex-column justify-center bg-white lg:flex-row">
      <Login userAgent={userAgent} />
    </main>
  );
}
