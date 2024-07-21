// utils/db.js
import { JSONFilePreset } from "lowdb/node";
import { join } from "path";

const file = join(process.cwd(), "db.json");
let db = {};

async function initializeDb() {
  db = await JSONFilePreset(file, {});

  await db.read();
  db.data ||= { notes: [] };
  await db.write();
}

const asyncHandler = async () => {
  await initializeDb();
};

asyncHandler();

export default db;
