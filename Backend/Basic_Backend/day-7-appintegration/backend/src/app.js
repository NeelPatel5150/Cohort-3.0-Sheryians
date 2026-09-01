const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const notesRouter = require('./routes/notes.route');
const app = express();

app.use(express.json());
app.use(cors({"allowedHeaders": ["Content-Type", "Authorization"], "origin": "*", "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"}));

connectDB();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/notes', notesRouter);




module.exports = app;
