// utils/db.js
import { JSONFilePreset } from "lowdb/node";
import { join } from "path";

const file = join(process.cwd(), "db.json");
const db = await JSONFilePreset(file, {});

async function initializeDb() {
  await db.read();
  db.data ||= { notes: [] };
  await db.write();
}

await initializeDb();

export default db;
