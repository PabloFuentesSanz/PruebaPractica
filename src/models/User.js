const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("users", UserSchema);