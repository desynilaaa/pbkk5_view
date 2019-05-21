let express = require('express');
let route = express.Router();
const Request = require("request");

var dbconfig = require('../config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);
var bcrypt = require('bcrypt-nodejs');

var url = "http://71f56030.ngrok.io/";

exports.addUsers= (req,res)=>{
	 console.log("Berhasil mendaftar user");
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
            res.render('register',{rows2 : rows});
    });
};

    exports.getDelUser = (req,res)=>{
        var row = [];
        var row2=[];
        var id = req.params.id;
          // console.log("TES");
        console.log("MASUK delete");
        connection.query('delete from users where ID = ?',[id], function (err, rows) {
            console.log("MASUK query delete");

            if (err) {
                console.log(err);
            } else {
                    console.log("harusnya ke user");
                     // res.redirect('/users');
                    res.send(rows);
            }
        });
    };



    exports.getIdUser= (req,res)=>{
           var row = [];
            var row2=[];
            var id = req.params.id;
              // console.log("TES");
              console.log(id);
            connection.query('select * from users u , grup gr where id = ? and u.GR_ID = gr.GR_ID',[id], function (err, rows) {
                if (err) {
                    console.log(err);
                } else {
                res.send(rows);
                }
            });
    };
