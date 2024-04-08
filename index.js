const express = require("express");
const mongoose = require("mongoose");
var app = express();

app.use(express.json()); // Middleware 

app.listen(4000, () => {
  console.log("server is runing on 3000");
});

app.get("/", (req, res) => {
  res.send("Hello from node api server");
});

app.post("/api/products", (req,res)=>{
     console.log(req.body);
     res.send(req.body)
})

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
