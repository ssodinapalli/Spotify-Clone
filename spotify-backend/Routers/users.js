const express = require("express");
const router = express.Router();
const userdata = require("../Models/users");
const songdata = require("../Models/songs")

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
        res.send({ message: "Password Didnt Match" });
      }
    } else {
      res.send({ message: "Invalid Password or Email" });
    }
  });
});


router.post('/songs', async(req ,res)=>{
  const songs = new songdata({
    song:req.body.song,
  });try{
       const songss = await songs.save();
       console.log(songss)
       res.json(songss)
      
  }catch(err){
      console.log(err)
  }
});

router.get("/songs", async (req, res) => {
  try {
    const user = await songdata.find();
    res.json(user); // json format
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
