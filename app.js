const express = require('express');
const mongoose = require('mongoose');

// import routers
const usersRouter = require('./routes/users');

// Instantiate express application
const app = express();

// Mongo DB connection
mongoose.connect('mongodb://localhost', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log('Database connection successful');
}).catch((err)=>{
  console.log('Databse connection failed', err);
  process.exit();
});

// Setting up request body parsor
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Add routes
app.use('/', usersRouter);

// Add default error handler
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({message: 'Something went wrong!'});
});

module.exports = app
;
