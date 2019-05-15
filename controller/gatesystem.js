var db = require("../config");
var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
  response.render('gatesystem.tl');
});

module.exports = router;
