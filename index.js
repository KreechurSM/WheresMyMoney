import express from "express";
import bodyParser from "body-parser";
import { JSONFilePreset } from "lowdb/node";

const defaultData = { posts: [] };
const db = await JSONFilePreset("db.json", defaultData);

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// GET /api/checknote endpoint
app.get("/api/checknote", async (req, res) => {
  const serial = req.query.serial;
  if (serial) {
    console.log(`Serial: ${serial}`);
    res.status(200).send(`Received serial: ${serial}`);

    const post = { id: 1, title: "lowdb is awesome", views: 100 };

    // In two steps
    db.data.posts.push(post);
    await db.write();
  } else {
    res.status(400).send("Serial parameter is missing");
  }
});

// POST /api/newnote endpoint
app.post("/api/note", (req, res) => {
  const note = req.body;
  console.log("New note:", note);

  // Check if exists
  //if not add new note

  //otherwise log new location and

  res.status(201).send("Note received");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
