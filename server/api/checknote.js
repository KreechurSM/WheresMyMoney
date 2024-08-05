// server/api/checknote.js
import { initializeDb } from "@/utils/db.js";
import { recordExists } from "~/utils/dbUtils";
// curl "http://localhost:3000/api/checknote?serial=12345"
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const serial = query.serial;

  const db = await initializeDb();

  if (serial) {
    console.log(`Serial: ${serial}`);
    console.dir(serial);
    const post = { id: 1, title: "lowdb is awesome", views: 100 };

    const _ex = await recordExists(db, "1234");
    console.log(_ex);

    // In two steps
    db.data.posts.push(post);
    await db.write();

    return `Received serial: ${serial}`;
  } else {
    throw createError({
      statusCode: 400,
      statusMessage: "Serial parameter is missing",
    });
  }
});

// if get serial from body
// does serial exist in DB
//  Yes = Update count, Add new location.
//  No = Add new record, count 0 and location
