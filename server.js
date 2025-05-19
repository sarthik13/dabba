const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const db = require('./server/config/db.config');

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(`mongodb://${db.HOST}:${db.PORT}/${db.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  
  })
  .catch(err => {
    console.error("Connection error", err);
  });

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World from Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
