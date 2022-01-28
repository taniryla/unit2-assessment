var express = require('express');
var router = express.Router();
var groceries = require('../data/groceries');


/* Controller code goes here */
router.get('/', function(req, res, next) {
    res.render('index', { groceries });
});

// POST /groceries (create a grocery item)
router.post('/groceries', function(req, res) {
    req.body.done = false;
    groceries.push(req.body);
    res.redirect('/');
})

// DELETE /groceries/:idx
router.delete('/groceries/:idx', function(req, res) {
    groceries.splice(req.params.idx, 1);
    res.redirect('/');
});

module.exports = router;