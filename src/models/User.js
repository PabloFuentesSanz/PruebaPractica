const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String },
  userName: { type: String },
  publicKey: { type: String },
  amount: { type: Number },
});

module.exports = mongoose.model("users", UserSchema);
