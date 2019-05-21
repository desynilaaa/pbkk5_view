let express = require('express');
let route = express.Router();
const Request = require("request");

var dbconfig = require('../config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);
var bcrypt = require('bcrypt-nodejs');

var url = " http://37b36698.ngrok.io/";


exports.getGates= (req,res)=>{
  global.gate;
  Request.get(url+"gates", (error, response, body) => {
      if(error) {
          return console.dir(error);
      }
      console.dir(JSON.parse(body));
      global.gate = JSON.parse(body);
      gate = global.gate;
      res.render('gate',{
        rows2:gate
      });
  });

};

exports.addGates= (req, res) => {
  // global.gateid = req.body.;
  global.name = req.body.name;
  global.open = req.body.open;
  global.close = req.body.close;
  global.role = req.body.role;

  Request.post({
		url:     url+'/gates/add',
		form:    { name: global.name, open : global.open, close : global.close, role : global.role}
	  }, function(error, response, body){
    		result = JSON.parse(body);
    		console.dir(body);
    		return res.redirect('/gates');
	  });

};

exports.getIdGate= (req,res)=>{

};

exports.getDelGate=(req,res)=>{

};
