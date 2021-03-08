const User = require('../models/user');

const homeGet = (req, res) => {
  User.findOne({ username: 'Donni Brouwer' }).then((result) => {
    res.render('pages/home', { title: 'Home', user: result });
  });
};

const userPost = (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then((result) => {
      res.redirect('/profile');
    })
    .catch((err) => {
      console.log(err);
    });
};

const profileGet = (req, res) => {
  User.findById('604215c2596e6d66e2c19f82').then((result) => {
    res.render('pages/my_profile', { title: 'Profile', user: result });
  });
};

const addUserGet = (req, res) => {
  res.render('pages/adduser', { title: 'Add a User' });
};

const editProfileGet = (req, res) => {
  User.findOne({ username: 'Wutru' }).then((result) => {
    res.render('pages/editprofile', { title: 'Edit Profile', user: result });
  });
};

const editProfile = (req, res) => {
  const updateUser = '604215c2596e6d66e2c19f82';

  User.findByIdAndUpdate(updateUser, req.body).then(() => {
    User.findOne({ updateUser }).then((result) => {
      res.redirect('/profile');
    });
  });
};

module.exports = {
  homeGet,
  userPost,
  profileGet,
  addUserGet,
  editProfileGet,
  editProfile,
};
