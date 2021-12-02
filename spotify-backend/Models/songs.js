const mongoose = require("mongoose");

const songSchema =  new mongoose.Schema({
    song:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("songdata",songSchema )