let express = require('express');
let route = express.Router();
const Request = require("request");

var dbconfig = require('../config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);
var bcrypt = require('bcrypt-nodejs');

var url = "http://71f56030.ngrok.io/";


exports.getGates= (req,res)=>{

};

exports.addGates= (req, res) => {

};

exports.getIdGate= (req,res)=>{

};

exports.getDelGate=(req,res)=>{

};
