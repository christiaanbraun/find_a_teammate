const bodyParser = require('body-parser');
const User = require('../models/user');

module.exports = function (app) {
  // Basic routing
  app.get('/', (req, res) => {
    res.redirect('/displayuser');
  });

  app.get('/profile', (req, res) => {
    res.render('pages/my_profile', { title: 'Profile' });
  });

  app.get('/settings', (req, res) => {
    res.render('pages/settings', { title: 'Settings' });
  });

  // Spicy Routing
  app.get('/displayuser', (req, res) => {
    User.find().then((result) => {
      res.render('pages/home', { title: 'Home', user: result });
    });
  });

  app.post('/settings', (req, res) => {
    const user = new User(req.body);

    user
      .save()
      .then((result) => {
        res.redirect('/profile');
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // Get 404 page
  app.use((req, res) => {
    res.status(404).send('404 not found');
  });
};
