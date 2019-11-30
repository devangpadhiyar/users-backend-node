/*
Controller for users
*/

const {User} = require('../models/users');

const userList = (req, res) => {
  User.find().then((users)=>{
    res.send(users);
  }).catch((err)=>{
    res.status(500).send({message: 'Something went wrong'});
  });
};

// User add controller
const userAdd = (req, res) => {
  if (!req.body) {
    res.status(400).json({message: 'Empty request body'});
  } else {
    // Create User
    const user = User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
    });

    // Save user
    user.save().then((data)=>{
      res.send(data);
    }).catch((err)=>{
      if (err.name==='ValidationError') {
        res.status(400).json(err);
      }
    });
  }
};

// Single user get controller
const userGet = (req, res) => {
  // Check for id in request params
  if (!req.params.id) {
    res.status(400).send({message: 'Please provide Id'});
  } else {
    User.findById(req.params.id).then((user)=>{
      res.send(user);
    }).catch((err)=>{
      console.log(err);
      res.status(404).send(err);
    });
  }
};

// Update user controller
const userUpdate = (req, res) => {
  // Check for id in request params
  if (!req.params.id) {
    res.status(400).send({message: 'Please provide Id'});
  } else if (!req.body) {
    res.status(400).send({message: 'Please add request body'});
  } else {
    // Find user b`y id and update
    User.findByIdAndUpdate(req.params.id, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
    }, {new: true}).then((user)=>{
      res.send(user);
    }).catch((err)=>{
      console.log(err);
      res.status(404).send(err);
    });
  }
};

// Remove user controller
const userRemove = (req, res) => {
  // Check for id in request params
  if (!req.params.id) {
    res.status(400).send({message: 'Please provide Id'});
  } else {
    // Find user by id and update
    User.findByIdAndDelete(req.params.id).then((user)=>{
      res.status(204).send(user);
    }).catch((err)=>{
      console.log(err);
      res.status(404).send(err);
    });
  }
};

module.exports = {
  userList,
  userAdd,
  userGet,
  userUpdate,
  userRemove,
}
;
