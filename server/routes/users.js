var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
     
  //res.send('respond with a resource');
  // MAJA CODE

  let dataArray= [
    {name:'John', age:12},
    {name:'Lisa', age:15},
    {name:'Maja', age:28}

  ]

  res.json({
    data:dataArray
  })

});

module.exports = router;
