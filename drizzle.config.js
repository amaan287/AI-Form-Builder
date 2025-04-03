/** @type {import('drizzle-kit').Config} */
module.exports = {
  schema: "./configs/schema.js",
  out: "./drizzle",
  driver: "pg",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL_CONFIG,
  },
}; 