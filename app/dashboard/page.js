'use client';

import { useSession, signOut } from '../../lib/auth-client.js';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push('/login');
    }
  }, [session, isPending]);

  if (isPending) {
    return <p style={{ padding: '40px' }}>Cargando...</p>;
  }

  if (!session) return null;

  return (
    <main style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Dashboard</h1>
        <button
          onClick={() => signOut({ callbackURL: '/login' })}
          style={{ background: '#dc2626', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
        >
          Cerrar sesion
        </button>
      </div>

      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '24px' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '8px' }}>
          Bienvenido, <strong>{session.user.name}</strong>
        </p>
        <p style={{ color: '#555' }}>
          Email: {session.user.email}
        </p>
      </div>
    </main>
  );
}