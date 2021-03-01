const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const controller = require('./controller/controller.js');

const app = express();
const port = 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@buster.boqc9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const { connection } = mongoose;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Static files are in public folder
app.use(express.static('public'));

controller(app);

// Set port and verify the server is working
app.listen(port, function () {
  console.log(`server is running on ${port}`);
});
