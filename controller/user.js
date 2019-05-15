var db = require("../config");
var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
	let sql = "SELECT * FROM user";
	let query = db.query(sql, (err, results,fields) => {
		if(err) throw err;
		// console.log(matkuls);
		response.render('user/user.njk',{results});
	});
    //response.render('mahasiswa/index.njk',{username,nama});
});

router.get('/:id', function(request, response) {
	let getId = request.params.id
	let url = '/users'.concat(getId)
	let sql = "SELECT * FROM user WHERE id_user=".concat(getId)
	let query = db.query(sql, (err, results, fields) => {
		if (err) throw err;
		// response.redirect({results}, url)
		response.render('user/user.njk', {results})
	})
})

router.post('/delete/:id', function(request, response) {
	let deleteId = request.params.id
	let sql = "DELETE FROM user WHERE id_user=".concat(deleteId)
	let query = db.query(sql, (err, results, fields) => {
		if(err) throw err;
		response.redirect('/users')
	})
})


router.post('/add', function(request, response) {
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

			response.redirect('/users')
	  }
	})
})



module.exports = router;
