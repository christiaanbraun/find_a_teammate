const bodyParser = require('body-parser');
const User = require('../models/user');

module.exports = function (app) {
  const urlencodedParser = bodyParser.urlencoded({ extended: false });

  // Basic routing
  app.get('/', (req, res) => {
    res.redirect('/displayuser');
  });

  app.get('/profile', (req, res) => {
    res.render('pages/my_profile');
  });

  app.get('/settings', (req, res) => {
    res.render('pages/settings');
  });

  // Spicy Routing
  app.get('/displayuser', (req, res) => {
    User.find().then((result) => {
      res.render('pages/home', { title: 'Home', user: result });
    });
  });

  // Get 404 page
  app.use((req, res) => {
    res.status(404).send('404 not found');
  });
};
