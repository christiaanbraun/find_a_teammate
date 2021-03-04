const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const dbURI = `mongodb+srv://test_user1:${process.env.DB_PASS}@buster.boqc9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('DB connection succesful'))
  .catch((err) => console.log(err));
