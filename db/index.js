import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { proyectos } from './schema.js';

const sqlite = new Database('sesion7.db');
export const db = drizzle(sqlite);
export { proyectos };