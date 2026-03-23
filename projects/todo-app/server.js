const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// middleware to allow frontend requests
app.use(cors());

// middleware to read JSON body
app.use(express.json());

// in-memory storage (resets on server restart)
let todos = [];

// GET all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// ADD new todo
app.post('/todos', (req, res) => {
    const newTodo = {
        id: Date.now(), // unique id using timestamp
        task: req.body.task,
        completed: false
    };

    todos.push(newTodo); // store in array
    res.json(newTodo);
});

// DELETE todo by id
app.delete('/todos/:id', (req, res) => {
    const id = Number(req.params.id); // get id from URL
    todos = todos.filter(todo => todo.id !== id); // remove matching todo
    res.json({ message: "Deleted" });
});

// TOGGLE completed status
app.put('/todos/:id', (req, res) => {
    const id = Number(req.params.id);

    todos = todos.map(todo =>
        todo.id === id
            ? { ...todo, completed: !todo.completed } // flip true/false
            : todo
    );

    res.json({ message: "Updated" });
});

// start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

/*
  express() → creates your server
  app.use(express.json()) → allows server to read JSON data
  todos = [] → temporary storage (RAM)
  GET /todos → fetch all tasks
  POST /todos → add new task
*/