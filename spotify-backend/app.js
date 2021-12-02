const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')


const app = express();
// const url = "mongodb://localhost/users";

const DB = 'mongodb+srv://jerry:jerryplox@spotify-cluster.wbprv.mongodb.net/spotify-db?retryWrites=true&w=majority';

mongoose.connect(DB, {useNewUrlParser:true}).then(()=>{
    console.log('successfull')
}).catch((err)=>{
    console.log(err)
})

const con = mongoose.connection;
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());

const userRouter = require("./Routers/users"); // using routers present in Routers folder
app.use("/", userRouter);


con.on("open", () => {
    console.log("connected");
});

app.listen(9000, () => {
    console.log("server started");
});

// http://localhost:9000/users
//http://localhost:9000/songs
//mongodb+srv://jerry:<password>@spotify-cluster.5gc6d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority