export default async function Proyectos() {
  let proyectos = [];
  let error = false;

  try {
    const res = await fetch('http://localhost/wordpress/wp-json/wp/v2/proyecto');
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
          No se pudieron cargar los proyectos. WordPress puede estar apagado.
        </p>
      )}

      {!error && proyectos.length === 0 && (
        <p style={{ color: '#888' }}>No hay proyectos publicados aun.</p>
      )}

      <div style={{ display: 'grid', gap: '20px' }}>
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '24px' }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
              {proyecto.title.rendered}
            </h2>
            <div
              style={{ color: '#555', marginBottom: '16px', lineHeight: '1.7' }}
              dangerouslySetInnerHTML={{ __html: proyecto.content.rendered }}
            />
            <a href={'/proyectos/' + proyecto.slug} style={{ color: '#0070f3', textDecoration: 'none' }}>
              Ver detalle
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}