const { error } = require("console");
const express = require("express");
const app = express();
const port = 3000;

// MiddleWare UNTUK PARSIN JSON
app.use(express.json());

// Simpan data Tasks di memory (summy database)
let task = [];
let idCounter = 1;

app.get("/", (req, res) => {
  return res.status(200).json("hello world");
});

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

// READ: Tampilkan semua status
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// READ: Tampilkan task bberdasarkan id
app.get("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const task = tasks.find((t) => t.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ error: "Task not found. " });
  }
  res.json(task);
});

// UPDATE: update tasks berdarakan id
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const task = tasks.find((t) => t.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ error: " Task Not Found" });
  }
  if (!title || !description) {
    return res
      .status(404)
      .json({ error: " Title and description are required." });
  }
  task.title = title;
  task.description = description;
  res.json(task);
});

// DELETE: Hapus task berdasarkan id
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((t) => t.id == parseInt(id));
  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not founf" });
  }
  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

// start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
