export default {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://finan-smart_owner:uk3aed9QZotj@ep-wispy-breeze-a5iadk8t.us-east-2.aws.neon.tech/finan-smart?sslmode=require",
    connectionString:
      "postgresql://finan-smart_owner:uk3aed9QZotj@ep-wispy-breeze-a5iadk8t.us-east-2.aws.neon.tech/finan-smart?sslmode=require",
      "postgresql://neondb_owner:npg_V8XplJ1nDOPm@ep-lively-firefly-aglma9tt-pooler.c-2.eu-central-1.aws.neon.tech/financetracker?sslmode=require&channel_binding=require",
  },
};
