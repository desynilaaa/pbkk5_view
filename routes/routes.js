let express = require('express');
let route = express.Router();
var dbconfig = require('../config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);
var bcrypt = require('bcrypt-nodejs');
var app = express();

app.use(express.static("public"));

const controller = require('../controller/controller.js');
const gatecontroller = require('../controller/gateController.js');
const usercontroller = require('../controller/userController.js');

module.exports = function(app) {
	app.get('/' ,controller.index);
	// app.get('/login/:id' ,controller.loginPage);

	//users
	app.post('/users', usercontroller.addUsers);
	app.get('/users', usercontroller.getUsers);
	app.get('/users/:id', usercontroller.getIdUser);
	app.delete('/users/:id', usercontroller.getDelUser);

	// auth-login
	app.post('/login', controller.doLogin );
	app.get('/login', controller.getLogin);

	// Gate sudah
	app.post('/gates', gatecontroller.addGates);
	app.get('/gates', gatecontroller.getGates);
	app.get('/gates/:g_id', gatecontroller.getIdGate);
	app.delete('/gates/:g_id', gatecontroller.getDelGate);

	return route;
};
