var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
    res.render("index")
})

router.get('/portfolio', function(req, res){
    res.render("projects/full")
})


router.get('/frcs', function(req, res){
    res.render("projects/frcs")
})

module.exports = router;