const router = require('express').Router();

// Import Controller
const controller = require('../controllers/controller');

router.get('/adduser', controller.addUserGet);

router.post('/adduser', controller.userPost);

router.get('/profile', controller.profileGet);

router.get('/editprofile', controller.editProfileGet);

router.post('/editprofile', controller.editProfile);

module.exports = router;
