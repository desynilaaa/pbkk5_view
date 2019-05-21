var app = require("./app");

var PORT = process.env.PORT || 9999;

app.listen(PORT, '0.0.0.0', function() {
    console.log('Listening to port:  ' + PORT);
});
