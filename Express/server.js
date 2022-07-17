var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname,"public")))
app.get('/hello/:name', function(req, res){
   res.send("Hello Server!"+req.params.name);
});
app.get('/about', function(req, res){
   // res.send("Hello in kitty world!");
// });
   // res.sendFile(path.join(__dirname,'index.html'))
   res.json({"harry":34})
});
app.listen(8000);
