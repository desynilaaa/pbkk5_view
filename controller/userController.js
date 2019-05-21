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
	 // console.log("Berhasil mendaftar user");
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

    };



exports.getIdUser= (req,res)=>{
    // id_user = req.params.id_user;
    // Request.get("http://715f9452.ngrok.io/users/"+id_user, (error, response, body) => {
    // if(error) {
    //     return console.log(error);
    // }
    // var data = JSON.parse(body);
    // console.log(data['values'][0]);
    // res.render('profile', { user: data['values'][0], path: "/indexuser"} );
    // });
};
