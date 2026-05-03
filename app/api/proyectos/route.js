import { db, proyectos } from '../../../db/index.js';

export async function GET() {
  try {
    const todos = await db.select().from(proyectos);
    return Response.json(todos);
  } catch (e) {
    return Response.json({ error: 'Error al obtener proyectos' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const nuevo = await db.insert(proyectos).values({
      titulo: body.titulo,
      descripcion: body.descripcion,
      tecnologias: body.tecnologias,
    }).returning();
    return Response.json(nuevo[0], { status: 201 });
  } catch (e) {
    return Response.json({ error: 'Error al crear proyecto' }, { status: 500 });
  }
}