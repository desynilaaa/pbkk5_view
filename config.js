var mysql = require('mysql');

var db = mysql.createConnection({
    host: "db4free.net",
    user: "pbkkkelompok9",
    password: "pbkkkelompok9",
    database: "servernine6"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = db;