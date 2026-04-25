export default async function ProyectoDetalle({ params }) {
  const { slug } = await params;
  let proyecto = null;
  let error = false;

  try {
    const res = await fetch('http://localhost/wordpress/wp-json/wp/v2/proyecto?slug=' + slug);
    if (!res.ok) throw new Error('Error');
    const data = await res.json();
    proyecto = data[0];
  } catch (e) {
    error = true;
  }

  if (error || !proyecto) {
    return (
      <main style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
        <p style={{ color: '#dc2626' }}>Proyecto no encontrado.</p>
        <a href="/proyectos" style={{ color: '#0070f3' }}>Volver a proyectos</a>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
      <a href="/proyectos" style={{ color: '#0070f3', textDecoration: 'none', display: 'block', marginBottom: '2rem' }}>
        Volver a proyectos
      </a>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
        {proyecto.title.rendered}
      </h1>
      <div
        style={{ color: '#555', lineHeight: '1.8', background: 'white', padding: '24px', borderRadius: '10px', border: '1px solid #e5e7eb' }}
        dangerouslySetInnerHTML={{ __html: proyecto.content.rendered }}
      />
    </main>
  );
}