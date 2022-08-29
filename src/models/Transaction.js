const mongoose = require("mongoose");
const { Schema } = mongoose;

const TransactionSchema = new Schema({
  from: { type: String },
  to: {type: String},
  type: {type: String},
  amount: {type: Number},
  date: {type: String}
});

module.exports = mongoose.model("transactions", TransactionSchema);