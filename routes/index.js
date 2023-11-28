var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

//Get Post request
router.post('/', function(req, res, next) {
  db.dbInsert(req.body.name, req.body.surname, req.body.age, req.body.university, req.body.major, req.body.gpa);
  res.redirect('/result');
});

module.exports = router;
