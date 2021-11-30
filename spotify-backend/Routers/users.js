const express = require('express')
const router = express.Router();
const userdata = require('../Models/users')


router.get('/' , async(req, res)=>{
    try{
        const user = await userdata.find();
        res.json(user)  // json format
        console.log('check')
    }
    catch(err){
       res.send(err)
    }
})

router.post('/' , async(req,res)=>{
        const  user = new userdata({
            firstName :req.body.firstName,
            lastName : req.body.lastName,
            email: req.body.email,
            password:req.body.password,
            confirmPassword:req.body.confirmPassword,
        })
    try{
      const resdata = await user.save();
      res.json(resdata)
    }
    catch(err){
        res.send(err)
    }
})

module.exports = router;