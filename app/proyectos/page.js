export default async function Proyectos() {
  let proyectos = [];
  let error = false;

  try {
    const res = await fetch('http://localhost:3000/api/proyectos', {
      cache: 'no-store'
    });
    if (!res.ok) throw new Error('Error');
    proyectos = await res.json();
  } catch (e) {
    error = true;
  }

  return (
    <main style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Mis Proyectos</h1>

      {error && (
        <p style={{ color: '#dc2626', background: '#fef2f2', padding: '16px', borderRadius: '8px' }}>
          No se pudieron cargar los proyectos.
        </p>
      )}

      {!error && proyectos.length === 0 && (
        <p style={{ color: '#888' }}>No hay proyectos aun.</p>
      )}

      <div style={{ display: 'grid', gap: '20px' }}>
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} style={{
            background: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '10px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
              {proyecto.titulo}
            </h2>
            <p style={{ color: '#555', marginBottom: '12px', lineHeight: '1.7' }}>
              {proyecto.descripcion}
            </p>
            <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '16px' }}>
              Tecnologias: {proyecto.tecnologias}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}