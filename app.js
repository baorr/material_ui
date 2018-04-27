var express = require("express");
var app = express();
var router = express.Router();

app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));

router.get("/demo",function(req,res){
  res.sendFile(__dirname + "/demo.html");
});

router.get("/ui",function(req,res){
  res.sendFile(__dirname + "/ui.html");
});

app.use(router);

app.listen(3000,function(){
  console.log("Live at Port 3000");
});