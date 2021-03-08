const express = require('express');

const router = express.Router;
const User = require('../models/user');

router.get('/profile', (req, res) => {
  User.findOne({ username: 'Wutru' }).then((result) => {
    res.render('pages/my_profile', { title: 'Profile', user: result });
  });
});

router.get('/editprofile', (req, res) => {
  User.findOne({ username: 'Wutru' }).then((result) => {
    res.render('pages/editprofile', { title: 'Edit Profile', user: result });
  });
});

router.post('/adduser', (req, res) => {
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

module.exports = router;
