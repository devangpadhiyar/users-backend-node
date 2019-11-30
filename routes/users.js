/*
Router module used for users
*/

const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const {
  userList,
  userAdd,
  userGet,
  userUpdate,
  userRemove,
} = require('../controllers/users');


// Get users list
router.get('/', userList);

// Add single user
router.post('/user/', userAdd);

// Get single user
router.get('/user/:id', userGet);

// Remove single user
router.delete('/user/:id', userRemove);

// Update single user
router.patch('/user/:id', userUpdate);


module.exports = router;
