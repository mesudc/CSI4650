var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/db.js');



/* GET result page. */

router.get('/', async function(req, res, next) {
    
    const successMessage = req.query.successMessage;
    const addedResults = req.query.addedResults;
    
    const results = await db.dbGet();
    console.log(results);
    res.render('result', { title: 'Result', results: results, successMessage: successMessage, addedResults: addedResults });

});

module.exports = router;