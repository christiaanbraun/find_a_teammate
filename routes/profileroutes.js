const express = require('express');

const router = express.Router;
const User = require('../models/user');

router.get('/adduser', (req, res) => {
  res.render('pages/adduser', { title: 'Add a User' });
});

router.get('/allusers', (req, res) => {
  User.find().then((result) => {
    res.render('pages/allusers', { title: 'All Users', user: result });
  });
});

module.exports = router;
