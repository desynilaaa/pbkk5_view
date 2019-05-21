
var dbconfig = require('./config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);
var express  = require('express');
var app      = express();
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port     = process.env.PORT || 9999;
var passport = require('passport');
var flash    = require('connect-flash');
const tl = require('express-tl');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// require('./config/passport.js')(passport);
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.engine('tl',tl);
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'tl');
const fs = require('fs');

app.use(session({
    secret: 'pbkk9',
    resave: true,
    saveUninitialized: true
 } ));

// session secret
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());


// routes ======================================================================
require('./routes/routes.js')(app);

// launch ======================================================================
app.listen(port);
console.log('pbkk kelompok 9  localhost: ' + port);

module.exports = app;
