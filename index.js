const express = require("express");
const mongoose = require("mongoose");
const product = require("./model/Product.model.js");
var app = express();

app.use(express.json()); // Middleware

app.listen(4000, () => {
  console.log("server is runing on 3000");
});

app.get("/", (req, res) => {
  res.send("Hello from node api server");
});

//create API
app.post("/api/products", async (req, res) => {
  try {
    product = await product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
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
