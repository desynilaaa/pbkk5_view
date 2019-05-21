let express = require('express');
let route = express.Router();
const Request = require("request");

var dbconfig = require('../config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);
var bcrypt = require('bcrypt-nodejs');


var url = " http://715f9452.ngrok.io/";


// app.use('/', router);

exports.index= (req,res)=>{
        res.render('gatesystem.tl');
        // res.send("Ini halaman utama");
};

// exports.loginPage= (req,res)=>{
// };

exports.doLogin= (req,res)=>{
};

exports.getLogin= (req,res)=>{
};

// exports.getLogout= (req,res)=>{
// };
