var express = require('express');
const User = require('../models/user');
var router = express.Router();


// Set layout variables
router.use((req, res, next) => {
  res.locals.title = 'Farm-Link';
  res.locals.currentUserId = req.session.userId;

  next();
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Farm-Link' });
});


// login
router.get('/login', (req, res) => {
  res.render('login');
});

// POST login
router.post('/login', (req, res, next) => {
  User.authenticate(req.body.email,
  req.body.password, (err, user) => {
    if (err || !user) {
      const next_error = new Error("Username or password incorrect");
      next_error.status = 401;

      return next(next_error);
    } else {
      req.session.userId =  user._id;

      return res.redirect('/');
    }
  });
});

router.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) return next(err);
    });
  }
  return res.redirect('/');
});

module.exports = router;
