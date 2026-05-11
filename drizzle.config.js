export default {
  schema: ['./auth-schema.ts'], // ← Solo el schema de Better Auth
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: './sesion7.db',
  },
};