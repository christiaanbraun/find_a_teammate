const { router } = require('express');
const User = require('../models/user');

router.get('/', (req, res) => {
  User.findOne({ username: 'Donni Brouwer' }).then((result) => {
    res.render('pages/home', { title: 'Home', user: result });
  });
});

module.exports = router;
