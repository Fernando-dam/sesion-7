const proyectos = [
  {
    titulo: "ChallengeMate",
    descripcion: "App movil de retos entre amigos con Flutter y Firebase",
    tecnologias: "Flutter, Firebase, Dart"
  },
  {
    titulo: "Portfolio Web",
    descripcion: "Portfolio personal construido con Astro y Next.js",
    tecnologias: "Astro, Next.js, CSS"
  },
  {
    titulo: "CTF Mr Robot",
    descripcion: "Practica de pentesting sobre maquina vulnerable",
    tecnologias: "Kali Linux, Nmap, WPScan"
  }
];

for (const proyecto of proyectos) {
  const res = await fetch('http://localhost:3000/api/proyectos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(proyecto)
  });
  const data = await res.json();
  console.log('Creado:', data);
}