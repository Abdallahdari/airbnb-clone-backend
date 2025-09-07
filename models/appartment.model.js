const mongoose = require("mongoose");
const apprtmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
});
const apprtment = mongoose.model("apprtment", apprtmentSchema);
module.exports = apprtment;
