var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('poll', { title: 'Home' });
});

router.post('/', function(req, res, next) {
    const data = req.body;
    console.log(data);
    res.render('poll', { title: 'Home' });
});
module.exports = router;