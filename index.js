const express = require("express");
const mongoose = require("mongoose");
var app = express();

app.listen(4000, () => {
  console.log("server is runing on 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(
    "mongodb+srv://italiyaravi:JvsNOmXr7lveF64M@crud.ybhybfi.mongodb.net/?retryWrites=true&w=majority&appName=crud"
  )
  .then(() => {
    console.log("connected!!");
  })
  .catch(() => {
    console.log("error");
  });
