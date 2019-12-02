var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var bodyParser     =        require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Alligator Approaches');
});

app.post('/login',function(req,res){
    res.send('Received Your Post Request');
});

app.listen(port, function () {
    console.log('Example app listening on port !');
});