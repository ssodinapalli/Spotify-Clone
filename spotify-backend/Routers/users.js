const express = require("express");
const router = express.Router();
const userdata = require("../Models/users");

router.get("/", async (req, res) => {
  try {
    const user = await userdata.find();
    res.json(user); // json format
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  const user = new userdata({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });
  try {
    const resdata = await user.save();
    res.json(resdata);
  } catch (err) {
    res.send(err);
  }
});

router.post("/login", (req, res) => {
  //userdata
  const { email, password } = req.body;
  userdata.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "login sucess", user: user });
      } else {
        res.send({ message: "password didnt match" });
      }
    } else {
      res.send({ message: "user not found create your account" });
    }
  });
});

module.exports = router;
