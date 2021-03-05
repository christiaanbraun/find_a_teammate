const express = require('express');

const controller = require('./controller/controller.js');

const db = require('./db.js');

const app = express();
const port = 5000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Static files are in public folder
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

controller(app);

// Set port and verify the server is working
app.listen(port, function () {
  console.log(`server is running on localhost:${port}`);
});
