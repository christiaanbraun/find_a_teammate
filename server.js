const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const controller = require('./controllers/controller');

const app = express();
const port = 5000;

// Connect to MongoDB
const dbURI = `mongodb+srv://test_user1:${process.env.DB_PASS}@buster.boqc9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('DB connection succesful'))
  .catch((err) => console.log(err));

// Import Routes
const routes = require('./routes/routes.js');

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Static files are in public folder
app.use(express.static('public'));

// Middleware
app.use(express.urlencoded({ extended: true }));

// Get homepage
app.get('/', controller.homeGet);

app.use(routes);

app.use((req, res, next) => {
  res.status(404).send('This page does not exist!');
});

// Set port and verify the server is working
app.listen(port, function () {
  console.log(`server is running on localhost:${port}`);
});
