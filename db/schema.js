import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const proyectos = sqliteTable('proyectos', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  titulo: text('titulo').notNull(),
  descripcion: text('descripcion').notNull(),
  tecnologias: text('tecnologias').notNull(),
});