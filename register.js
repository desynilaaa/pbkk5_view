mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'SCS_SKOM'
});


exports.register = function(req,res){
  // console.log("req",req.body);
  var user={
    "nrp":req.body.nrp,
    "nama":req.body.nama,
    "role":req.body.role,
    "password":req.body.password
  }
  connection.query('INSERT INTO user SET ?',user, function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    console.log("FIELDS: ", fields)
    var log={
      "id_gate_log": "1",
      "nrp_log": fields.nrp,
      "message": "Register user baru gagal",
      "time":  Date.now()
    }
    connection.query('INSERT INTO log VALUES ?', log, (err, result) => {
      if (err) throw err
    })
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    console.log('The solution is: ', results);
    console.log('Date: ', Date.now())
    console.log('NRP: ', user.nrp)
    var log={
      "id_gate_log": "1",
      "nrp_log": user.nrp,
      "message": "Register user baru BERHASIL",
      "time":  Date.now()
    }
    // connection.query('INSERT INTO log VALUES ?', log, (err, result) => {
    //   if (err) console.log('Error di insert log')
    // })

    connection.query('INSERT INTO log (id_gate_log, nrp_log, message, time) VALUES (?, ?, ?, ?)', ['1', user.nrp, 'Register user baru Berhasil', Date.now()], function(err, result) {
      if (err) {
        console.log("Error di insert log")
      }})

    res.send({
      "code":200,
      "success":"user registered sucessfully"
        });
  }
  });
}