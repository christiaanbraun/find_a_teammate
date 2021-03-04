const bodyParser = require('body-parser');
const User = require('../models/user');

module.exports = function (app) {
  const urlencodedParser = bodyParser.urlencoded({ extended: false });

  // Basic routing
  app.get('/', (req, res) => {
    res.render('pages/home');
  });

  app.get('/profile', (req, res) => {
    res.render('pages/my_profile');
  });

  app.get('/settings', (req, res) => {
    res.render('pages/settings');
  });

  // Spicy Routing

  // Get 404 page
  app.use(function (req, res) {
    res.status(404).send('404 not found');
  });
};
