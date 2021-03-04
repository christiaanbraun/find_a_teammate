const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: false,
  },
  primary: {
    type: String,
    required: true,
  },
  secondary: {
    type: String,
    required: true,
  },
  perk1: {
    type: String,
    required: true,
  },
  perk2: {
    type: String,
    required: true,
  },
  perk3: {
    type: String,
    required: true,
  },
  operator: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('Profile', userSchema);
module.exports = User;
