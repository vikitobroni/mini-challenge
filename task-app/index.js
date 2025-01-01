const express = require("express");
const app = express();
const port = 3000;

// MiddleWare UNTUK PARSIN JSON
app.use(express.json());

// Simpan data Tasks di memory (summy database)
let task = [];
let idCounter = 1;

// CREATE: tambahkan task baru
app.post("/tasks", (req, res) => {
  const { title, description } = req.body;
  if (!titttle || !description) {
    return res
      .status(400)
      .json({ error: "Title and Description are required." });
  }
  const newTask = { id: idCounter++, title, description };
  task.push(newTask);
  res.status(201).json(newTask);
});
