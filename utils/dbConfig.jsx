import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://finan-smart_owner:uk3aed9QZotj@ep-wispy-breeze-a5iadk8t.us-east-2.aws.neon.tech/finan-smart?sslmode=require"
 "postgresql://neondb_owner:npg_V8XplJ1nDOPm@ep-lively-firefly-aglma9tt-pooler.c-2.eu-central-1.aws.neon.tech/financetracker?sslmode=require&channel_binding=require"
);
export const db = drizzle(sql, { schema });
