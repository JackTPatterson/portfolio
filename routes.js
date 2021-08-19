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

router.get('/scsday', function(req, res){
    res.render("projects/scsday")
})

router.get('/taylors-customz', function(req, res){
    res.render("projects/customz")
})

router.get('/bee', function(req, res){
    res.render("projects/bee")
})

router.get('/peerlab', function(req, res){
    res.render("projects/peerlab")
})

router.get('/shse', function(req, res){
    res.render("projects/shse")
})

module.exports = router;