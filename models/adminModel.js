const { Schema, model } = require("mongoose");

const AdminSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  hash: { type: String },
});

module.exports = model("AdminModel", AdminSchema);
