let express = require('express');
let route = express.Router();
const Request = require("request");

var dbconfig = require('../config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);
var bcrypt = require('bcrypt-nodejs');
var result = {};
result["message"] = "";

var url = " http://715f9452.ngrok.io/";


// app.use('/', router);

exports.index= (req,res)=>{
        res.render('gatesystem.tl');
        // res.send("Ini halaman utama");
};

exports.getRegister= (req,res)=>{
        res.render('register.tl');
};

exports.doLogin= (req,res)=>{

  	global.nrp = req.body.nrp;
  	global.password = req.body.password;
  	global.id_gate = req.body.id_gate;
    console.log(global.nrp);
    console.log(global.password);
    console.log(global.id_gate);
  	Request.post({
  		url:     url+'login/auth',
  		form:    { username: global.nrp, password: global.password, id_gate_log: global.id_gate }
  	  }, function(error, response, body){
        // console.log(body);
      // console.dir(JSON.parse(body));
      result = JSON.parse(body);
  		console.dir(result["message"]);
  		if(result["message"] === "gagal" || result["message"] === "Tolong masukkan NRP dan Password!" || result["message"]=== "Incorrect NRP and/or Password!" ){
  			  res.redirect('/login');
  		}else if(result["message"] === "berhasil"){
  				res.redirect('/');
        }else{
          res.redirect('/login');
        }
  	  });
};

exports.getLogin= (req,res)=>{
  global.gate;
  Request.get(url+"gates", (error, response, body) => {
      if(error) {
          return console.dir(error);
      }
      console.dir(JSON.parse(body));
      global.gate = JSON.parse(body);
      gate = global.gate;
      res.render('login',{
        message : result["message"],
        rows:gate
      });
  });

};

// exports.getLogout= (req,res)=>{
// };
