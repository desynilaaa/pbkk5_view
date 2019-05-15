var db = require("../config");
var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
  response.render('gate/register.njk');
});

router.post('/add',function(request,response) {
	  // console.log("req",req.body);
	  var user={
	    "nrp":request.body.nrp,
      "nama":request.body.nama,
      "role":request.body.role,
      "password":request.body.password
	  }
	  db.query('INSERT INTO user SET ?',user, function (error, results, fields) {
	  if (error) {
	    var log={
	      "id_gate_log": results.insertId,
	      "nrp_log": null,
	      "message": "Membuat user baru gagal",
	      "time":  Date.now()
	    }
	    db.query('INSERT INTO log VALUES ?', log, (err, result) => {
	      if (err) throw err
	    })
	    response.send({
	      "code":400,
	      "failed":"error ocurred"
	    })
	  }else{
	    var log={
	      "id_gate_log": results.insertId,
	      "nrp_log": null,
	      "message": "Membuat user baru BERHASIL",
	      "time":  Date.now()
}
	    db.query('INSERT INTO log SET ?', log, function(err, result) {
	      if (err) {
	        console.log("Error di insert log")
	      }})

			response.redirect('/login')
	  }
	})
})
module.exports = router;
