var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '문은민이 이걸 보려나 바보야!!' });
});

module.exports = router;
