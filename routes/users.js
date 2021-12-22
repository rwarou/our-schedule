var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/auth', (req, res, next) => {
  const auth = {
    'id' : 'qwer',
    'pw' : 'asdf',
    'name' : 'rwarou'
  }

  const body = req.body
  console.log(body)

  if(auth.id === body.id && auth.pw === body.pw) {
    res.json({success: true})
  } else {
    res.json({success: false})
  }
})

module.exports = router;
