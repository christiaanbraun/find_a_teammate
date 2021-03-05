const bodyParser = require('body-parser');
const User = require('../models/user');

module.exports = function (app) {
  // Basic routing
  app.get('/', (req, res) => {
    User.findOne({ username: 'Donni Brouwer' }).then((result) => {
      res.render('pages/home', { title: 'Home', user: result });
    });
  });

  app.get('/profile', (req, res) => {
    User.findOne({ username: 'Wutru' }).then((result) => {
      res.render('pages/my_profile', { title: 'Profile', user: result });
    });
  });

  app.get('/editprofile', (req, res) => {
    User.findOne({ username: 'Wutru' }).then((result) => {
      res.render('pages/editprofile', { title: 'Edit Profile', user: result });
    });
  });

  app.post('editprofile', (req, res) => {});

  app.get('/adduser', (req, res) => {
    res.render('pages/adduser', { title: 'Add a User' });
  });

  // Post data to the database
  app.post('/adduser', (req, res) => {
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
