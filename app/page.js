import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      maxWidth: '900px',
      margin: '60px auto',
      padding: '0 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Hola, soy Fernando 👋
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem' }}>
        Desarrollador de aplicaciones multiplataforma apasionado por el desarrollo web y la ciberseguridad.
      </p>
      <Link
        href="/proyectos"
        style={{
          background: '#0070f3',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1rem'
        }}
      >
        Ver mis proyectos →
      </Link>
    </main>
  );
}