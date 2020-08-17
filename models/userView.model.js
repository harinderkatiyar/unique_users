const mongoose = require("mongoose");

const userView = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:"user"
  },
  viewDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:"product"
  },
});
module.exports = mongoose.model("userView", userView);
