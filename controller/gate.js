var db = require("../config");
var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
	let sql = "SELECT * FROM gate";
	let query = db.query(sql, (err, results,fields) => {
		if(err) throw err;
		// console.log(matkuls);
		response.render('gate/gate.njk',{results});
	});
    //response.render('mahasiswa/index.njk',{username,nama});
});

router.get('/:id', function(request, response) {
	let getId = request.params.id
	let url = '/gates'.concat(getId)
	let sql = "SELECT * FROM gate WHERE id_gate=".concat(getId)
	let query = db.query(sql, (err, results, fields) => {
		if (err) throw err;
		// response.redirect({results}, url)
		response.render('gate/gate.njk', {results})
	})
})

router.post('/delete/:id', function(request, response) {
	let deleteId = request.params.id
	let sql = "DELETE FROM gate WHERE id_gate=".concat(deleteId)
	let query = db.query(sql, (err, results, fields) => {
		if(err) throw err;
		response.redirect('/gates')
	})
})

router.post('/add', function(request, response) {
	  // console.log("req",req.body);
	  var gate={
	    "nama_gate":request.body.name
	  }
	  db.query('INSERT INTO gate SET ?',gate, function (error, results, fields) {
	  if (error) {
	    var log={
	      "id_gate_log": results.insertId,
	      "nrp_log": null,
	      "message": "Membuat gate baru gagal",
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
	      "message": "Membuat gate baru BERHASIL",
	      "time":  Date.now()
}
	    db.query('INSERT INTO log SET ?', log, function(err, result) {
	      if (err) {
	        console.log("Error di insert log")
	      }})

			response.redirect('/gates')
	  }
	})
})


module.exports = router;
