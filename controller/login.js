var connection = require("../config");
var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
  response.render('gate/login.njk');
});

router.post('/auth', function(request, response) {
  var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM user WHERE nrp = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.send("login berhasil");
				var time = new Date().getTime()
				connection.query('INSERT INTO log (id_gate_log, nrp_log, message, time) VALUES (?, ?, ?, ?)', ['1', username, 'Login user berhasil', time], function(err, result) {
	      	if (err) {
	        	console.log("Error di insert log")
	      	}})
			} else {
				response.send('Incorrect NRP and/or Password!');
				connection.query('INSERT INTO log (id_gate_log, nrp_log, message, time) VALUES (?, ?, ?, ?)', ['1', username, 'Login user gagal', Date.now()], function(err, result) {
	      	if (err) {
	        	console.log("Error di insert log")
	      	}})
			}
			response.end();
		});

	} else {
		response.send('Please enter NRP and Password!');
		response.end();
	}
});

router
module.exports = router;
