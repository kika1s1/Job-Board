const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/home", (req, res)=>{
    res.render("index");
})
app.get("/", (req, res)=>{
  res.render("index")
})
app.all("*", (req, res)=>{
  res.render("error");
})



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
