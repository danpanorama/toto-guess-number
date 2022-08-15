var express = require('express');
var router = express.Router();
const start = require('./../test')

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.json({msg:'hay'})



});
router.get('/toto',start.checkPrice, function(req, res, next) {
  next()


});

router.get('/lolo', function(req, res, next) {
  res.json({hat:';;;;;'})
  next()


});



module.exports = router;
