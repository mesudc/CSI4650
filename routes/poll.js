var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('poll', { title: 'Home' });
});

router.post('/', async function(req, res, next) {
  const data = req.body;
  console.log(data.inPerson);
  console.log(data.hyflex);
  console.log(data.online);

  //Doesn't work without async function below as redirect happens too quickly
  await db.dbInsert(data.inPerson, data.hyflex, data.online);

  // Successful insert, redirect to result page with success message and added values
  const successMessage = 'Poll results added successfully';
  const addedResults = {
    inPerson: data.inPerson,
    hyflex: data.hyflex,
    online: data.online
  };

  res.redirect(`/result?successMessage=${encodeURIComponent(successMessage)}&addedResults=${encodeURIComponent(JSON.stringify(addedResults))}`);
});
module.exports = router;