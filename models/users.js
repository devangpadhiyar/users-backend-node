/*
Models for users
*/
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'This field is required'],
    max: 20,
  },
  lastName: {
    type: String,
    required: [true, 'This field is required'],
    max: 20,
  },
  age: {
    type: Number,
    required: false,
  },
});

const User = mongoose.model('user', UserSchema);

module.exports = {
  User,
};
