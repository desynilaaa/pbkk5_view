let express = require('express');
let route = express.Router();
const Request = require("request");

var dbconfig = require('../config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);
var bcrypt = require('bcrypt-nodejs');

var url = "http://715f9452.ngrok.io/";
// var url = "http://71f56030.ngrok.io/";

exports.addUsers= (req,res)=>{
  global.nrp = req.body.nrp;
  global.nama = req.body.nama;
  global.role = req.body.role;
  global.password = req.body.password;
  console.log(global.nama);
  console.log(global.role);

  Request.post({
    url:     url+'register/add',
    form:    { nrp: global.nrp, role : global.role, password : global.password, nama : global.nama}
    }, function(error, response, body){
        // result = JSON.parse(body);
        // console.dir(body);
        res.redirect('/users');
    });
};

exports.getUsers= (req,res)=>{
    global.rows;
    Request.get(url+"users", (error, response, body) => {
            if(error) {
                    return console.dir(error);
            }
            else{
                    console.dir(JSON.parse(body));
                    global.rows = JSON.parse(body);
                    rows = global.rows;
            }
            res.render('users',{rows2 : rows});
    });
};

    exports.getDelUser = (req,res)=>{
      var id = req.params.id;
      Request.delete(url+"users/delete/"+id, (error, response, body) => {
          if(error) {
              return console.dir(error);
          }
          res.redirect('/users');
      });

    };



exports.getIdUser= (req,res)=>{
  var id = req.params.id;
  global.nrp;
  Request.get(url+"users/"+id, (error, response, body) => {
      if(error) {
          return console.dir(error);
      }
      console.dir(JSON.parse(body));
      global.nrp = JSON.parse(body);
      nrp = global.nrp;
      res.render('profile',{
        rows: nrp
      });
  });

  
};
