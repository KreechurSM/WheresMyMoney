// server/api/note.js
import db from "@/utils/db.js";

export default defineEventHandler(async (event) => {
  if (event.req.method === "POST") {
    const note = await useBody(event);
    console.log("New note:", note);

    // Add logic to check if note exists and add new note or log new location

    return { statusCode: 201, statusMessage: "Note received" };
  } else {
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed",
    });
  }
});
