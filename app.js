var express = require('express');
var os = require("os");
var bodyParser = require("body-parser");
const path = require('path');
var fs = require('fs')

var port = process.env.PORT || 3000;
var app = express();



//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req, res) {
    res.send('Alligator Approaches');
});


app.post('/post',function(req,res){
    var x = req.body.x.split(",");
    var y = req.body.y.split(",");
    var z = req.body.z.split(",");
    var state = req.body.state;

    var logger = fs.createWriteStream('data.txt', {
        flags: 'a' // 'a' means appending (old data will be preserved)
      })

    for (let i = 0; i < x.length; i++){
        logger.write(state + " " + x[i] + " " + y[i] + " " + z[i] + os.EOL);
    }

    logger.end()
    console.log("Data Written!");
    res.send('Post Received');
});



app.get('/download', (req, res) => {
    res.download(path.join(__dirname, "/data.txt"));
});

app.listen(port, function () {
    console.log('Example app listening on port !');
});