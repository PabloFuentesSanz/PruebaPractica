const express = require("express");
const { mongoose } = require("./database");

const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const cors = require("cors");

const User = require("../models/User");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//API
//Create User
app.post("/createUser", async (req, res) => {
  const user = new User({
    email: req.body.email,
    userName: req.body.email.split("@")[0],
    publicKey: uuidv4(),
    amount: 0,
  });
  await user.save();
  res.json(user);
});

//Get current user information
app.get("/currentUser/:email", async (req, res) => {
  const email = req.params.email;
  const user = await User.findOne({ email: email });
  res.json(user);
});

//Deposit money
app.put("/deposit/:email", async (req, res) => {
  const email = req.params.email;
  const amount = req.body.amount;
  const user = await User.findOneAndUpdate(
    { email: email },
    { $inc: { amount: amount } },
    { new: true }
  );
  user.save();
  res.json(user);
});

//Send money
app.put("/send/:email", async (req, res) => {
  const email = req.params.email;
  const amount = req.body.amount;
  const publicKey = req.body.publicKey;
  const userSend = await User.findOneAndUpdate(
    { email: email },
    { $inc: { amount: -amount } },
    { new: true }
  );
  userSend.save();
  const userRec = await User.findOneAndUpdate(
    { publicKey: publicKey },
    { $inc: { amount: amount } },
    { new: true }
  );
  userRec.save();
  res.json(userRec);
});

//Initialize Server
app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
