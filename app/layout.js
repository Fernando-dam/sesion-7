export const metadata = {
  title: 'Mi Portfolio',
  description: 'Portfolio de Fernando',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, background: '#f9f9f9', color: '#222' }}>
        <nav style={{
          background: '#0070f3',
          padding: '16px 24px',
          display: 'flex',
          gap: '20px'
        }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
            Inicio
          </a>
          <a href="/proyectos" style={{ color: 'white', textDecoration: 'none' }}>
            Proyectos
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}