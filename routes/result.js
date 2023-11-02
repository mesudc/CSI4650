var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/db.js');



/* GET result page. */

router.get('/', async function(req, res, next) {
    var result = await db.dbGetAverages();
    var total = await db.dbGetTotal();

    var avgage = parseFloat(result[0].avg_age).toFixed(2);
    var agegpa = parseFloat(result[0].avg_gpa).toFixed(2);

    res.render('result', { title: 'Result', total: total[0].total_rows, age: avgage, gpa: agegpa });
    }
);

module.exports = router;