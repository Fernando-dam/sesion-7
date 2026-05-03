'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NuevoProyecto() {
  const router = useRouter();
  const [form, setForm] = useState({
    titulo: '',
    descripcion: '',
    tecnologias: ''
  });
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setEnviando(true);
    setError(false);

    try {
      const res = await fetch('/api/proyectos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Error');
      router.push('/proyectos');
    } catch (e) {
      setError(true);
      setEnviando(false);
    }
  }

  return (
    <main style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px' }}>
      <a href="/proyectos" style={{ color: '#0070f3', textDecoration: 'none', display: 'block', marginBottom: '2rem' }}>
        Volver a proyectos
      </a>

      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Nuevo Proyecto</h1>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Mis Proyectos</h1>

        <a href="/proyectos/nuevo" style={{
            display: 'inline-block',
            marginBottom: '2rem',
            background: '#0070f3',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '0.9rem'
        }}>
         + Nuevo proyecto
        </a>

      {error && (
        <p style={{ color: '#dc2626', background: '#fef2f2', padding: '12px', borderRadius: '8px', marginBottom: '1rem' }}>
          Error al guardar el proyecto.
        </p>
      )}

      <div style={{ display: 'grid', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
            Titulo
          </label>
          <input
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Nombre del proyecto"
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
            Descripcion
          </label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            placeholder="Describe el proyecto"
            rows={4}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem', resize: 'vertical' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
            Tecnologias
          </label>
          <input
            name="tecnologias"
            value={form.tecnologias}
            onChange={handleChange}
            placeholder="React, Node.js, MySQL..."
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem' }}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={enviando}
          style={{
            background: enviando ? '#9ca3af' : '#0070f3',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '1rem',
            cursor: enviando ? 'not-allowed' : 'pointer',
            marginTop: '8px'
          }}
        >
          {enviando ? 'Guardando...' : 'Guardar proyecto'}
        </button>
      </div>
    </main>
  );
}