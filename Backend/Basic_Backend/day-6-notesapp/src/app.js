const express = require('express');
const connectDB = require('./config/db');
const notesRouter = require('./routes/notes.route');
const app = express();
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/notes', notesRouter);




module.exports = app;
