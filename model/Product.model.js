const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "plese enter product"],
    },
    quntity: {
      type: Number,
      require: true,
      default: 0,
    },
    price: {
      type: Number,
      require: true,
   
    },
  },
  {
    Timestamp: true,
  }
);

const product = mongoose.model("Product", ProductSchema);

module.exports = product;
