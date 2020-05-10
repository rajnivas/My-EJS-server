const express = require("express");
const app = express ();

app.get("/",function(req,res){
  res.send("<h1>Hello World</h>");
})

app.listen(3000, function() {
  console.log("Port 3000 is connected");
})
