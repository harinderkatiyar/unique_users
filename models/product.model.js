const mongoose = require("mongoose");

const product = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  title: {
    type: String,
    required:true
  },
});
module.exports = mongoose.model("product", product);
