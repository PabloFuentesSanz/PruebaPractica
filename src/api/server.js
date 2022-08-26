const express = require("express");
const app = express();
const port = 5000;
const { mongoose } = require("./database");
const User = require("../models/User");
const cors = require("cors");

app.use(cors());

app.post("/createUser", async (req, res) => {
  console.log(req)
  const user = new User({
    email: req.body.user.email,
    password: req.body.user.password,
  });
  await user.save();
  res.json(user);
});

app.get("/users", async (req, res) => {
  const allUsers = await User.find();
  res.json(allUsers);
});

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
  });