var app = require("./app");

var PORT = process.env.PORT || 3339;

app.listen(PORT, '0.0.0.0', function() {
    console.log('Listening to port:  ' + PORT);
});
