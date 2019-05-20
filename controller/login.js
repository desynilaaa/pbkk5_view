var connection = require("../config");
var express = require('express');
var router = express.Router();

checkRole = (gateRole, userRole) => {
  if (userRole === 'Dosen')
    return true
  else if (userRole === gateRole)
    return true
  else
    return false
}

router.get('/', function(request, response) {
  let sql = "SELECT * FROM gate"
  let query = connection.query(sql, (err, results, fields) => {
    if (err) throw err;
         response.render('login.tl',{
            rows : results
         });
  }); 
});


// router.post('/auth', function(request, response) {
//   var username = request.body.username;
//   var password = request.body.password;
//   var current = new Date().toLocaleTimeString();
//   let openTime  = ''
//   let closeTime = ''

//   connection.query('SELECT open, close FROM gate where id_gate = ?', [request.body.id_gate_log], function(error, results, fields) {
//     openTime = results[0].open
//     closeTime = results[0].close
//   })
//   if (username && password) {
//     connection.query('SELECT * FROM user WHERE nrp = ? AND password = ?', [username, password], function(error, results, fields) {
//     if (results.length > 0) {
//         request.session.loggedin = true;
//         request.session.username = username;

//           if (current > openTime && current < closeTime){
//             // response.send(`${username} berhasil Login! Selamat datang!`);
//           var log={
//             "id_gate_log":request.body.id_gate_log,
//             "nrp_log":username,
//             "message": "Login berhasil",
//             "time": current
//           }
//           connection.query('INSERT INTO log SET ?', log, function(err, result) {
//               if (err) {
//                 console.log("Error di insert log")
//               }})
//         response.redirect('/users');
//           }else {

//             // response.send(`Gate ini dibuka pukul ${openTime} dan ditutup ${closeTime}`)
//             var log={
//               "id_gate_log":request.body.id_gate_log,
//               "nrp_log":username,
//               "message": "Login gagal: Jam masuk gate",
//               "time": current
//             }
//             connection.query('INSERT INTO log SET ?', log, function(err, result) {
//               if (err) {
//                 console.log("Error di insert log")
//               }})
//         response.redirect('/login');          
//           }
//         }
//         else {
//           // response.send('Incorrect NRP and/or Password!');
//           var log={
//             "id_gate_log":request.body.id_gate_log,
//             "nrp_log":username,
//             "message": "Login gagal: NRP/Password salah",
//             "time": current}
//           connection.query('INSERT INTO log SET ?', log, function(err, result) {
//             if (err) {
//               console.log("Error di insert log")
//             }}) 
        
//         response.redirect('/login');
//         }
//         // response.end();
//       });

//   }else {
//     // response.redirect('/users'); 
//     response.send('Tolong masukkan NRP dan Password!');
//   }
// });


router.get('/', function(request, response) {
  let sql = "SELECT * FROM gate"
  let query = connection.query(sql, (err, results, fields) => {
    if (err) throw err;
    response.render('gate/login.njk', {results})
  })
  // response.render('gate/login.njk');
});

router.post('/auth', function(request, response) {
  var username = request.body.username;
  var password = request.body.password;
  var current = new Date().toLocaleTimeString();
  let openTime  = ''
  let closeTime = ''
  let gateRole = ''

  connection.query('SELECT open, close, role FROM gate where id_gate = ?', [request.body.id_gate_log], function(error, results, fields) {
    openTime = results[0].open
    closeTime = results[0].close
    gateRole = results[0].role
  })

  if (username && password) {
    connection.query('SELECT * FROM user WHERE nrp = ? AND password = ?', [username, password], function(error, results, fields) {
      if (results.length > 0) {
        request.session.loggedin = true;
        request.session.username = username;

        let userRole = results[0].role
        let roleAccess = checkRole(gateRole, userRole)

        let errorMsg = ''
        errorMsg = !roleAccess
                    ? 'Anda tidak mempunyai hak akses membuka gate ini'
                    : `Gate ini dibuka pukul ${openTime} dan ditutup ${closeTime}`

            if ((current > openTime && current < closeTime) && roleAccess){
                // response.send(`${username} berhasil Login! Selamat datang!`);
                var log={
                  "id_gate_log":request.body.id_gate_log,
                  "nrp_log":username,
                  "message": "Login berhasil",
                  "time": current
                }
                connection.query('INSERT INTO log SET ?', log, function(err, result) {
                  if (err) {
                    console.log("Error di insert log")
                  }})
                
                console.log("Berhasil masuk")
                response.redirect('/users');  
            }else {
              // response.send(errorMsg)
                 response.redirect('/login');  
                  var log={
                "id_gate_log":request.body.id_gate_log,
                "nrp_log":username,
                "message": "Login gagal: Jam masuk gate",
                "time": current
              }
              connection.query('INSERT INTO log SET ?', log, function(err, result) {
                if (err) {
                  console.log("Error di insert log")
                }})
            }
      }

      else {
        response.redirect('/login');  
        // response.send('Incorrect NRP and/or Password!');
        var log={
          "id_gate_log":request.body.id_gate_log,
          "nrp_log":username,
          "message": "Login gagal: NRP/Password salah",
          "time": current
        }
        connection.query('INSERT INTO log SET ?', log, function(err, result) {
          if (err) {
            console.log("Error di insert log")
          }})
      }

      response.end();
    });

  } else {
    // response.redirect('/users');     
    response.send('Tolong masukkan NRP dan Password!');
    // response.end();
  }
});

router
module.exports = router;
