// server/api/checknote.js
import db from "@/utils/db.js";
// curl "http://localhost:3000/api/checknote?serial=12345"
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const serial = query.serial;
  if (serial) {
    console.log(`Serial: ${serial}`);
    console.dir(serial);
    const post = { id: 1, title: "lowdb is awesome", views: 100 };

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
