'use client';

import { useState } from 'react';
import { signIn } from '../../lib/auth-client.js';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    setError('');
    const { error } = await signIn.email({
      email,
      password,
      callbackURL: '/dashboard',
    });
    if (error) setError('Email o contraseña incorrectos');
  }

  return (
    <main style={{ maxWidth: '400px', margin: '80px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Iniciar sesión</h1>
      {error && (
        <p style={{ color: '#dc2626', background: '#fef2f2', padding: '12px', borderRadius: '8px', marginBottom: '1rem' }}>
          {error}
        </p>
      )}
      <div style={{ display: 'grid', gap: '16px' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem' }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem' }}
        />
        <button
          onClick={handleLogin}
          style={{ background: '#0070f3', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '1rem', cursor: 'pointer' }}
        >
          Entrar
        </button>
        <a href="/registro" style={{ color: '#0070f3', textAlign: 'center' }}>
          No tienes cuenta? Registrate
        </a>
      </div>
    </main>
  );
}