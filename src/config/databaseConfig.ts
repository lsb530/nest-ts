export default () => ({
  database: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
})
