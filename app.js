
const express = require("express");
const mongoose = require('mongoose')
const url  = 'mongodb://localhost/userdb'

const app = express();
app
  .use("/api", require("./routes/connect.js"))
  .use(express.json())

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})

const con =mongoose.connection
con.on('open',function(){
  console.log("connected....");
})

module.exports = app;
