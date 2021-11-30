const express = require("express");
const mongoose = require("mongoose");


const app = express();
// const url = "mongodb://localhost/users";

const DB = 'mongodb+srv://jerry:jerry@spotify-cluster.5gc6d.mongodb.net/spotify-db?retryWrites=true&w=majority';

mongoose.connect(DB, {useNewUrlParser:true}).then(()=>{
    console.log('successfull')
}).catch((err)=>{
    console.log(err)
})

const con = mongoose.connection;
app.use(express.json());

const userRouter = require("./Routers/users"); // using routers present in Routers folder
app.use("/users", userRouter);


con.on("open", () => {
    console.log("connected");
});

app.listen(9000, () => {
    console.log("server started");
});

// http://localhost:9000/users
//mongodb+srv://jerry:<password>@spotify-cluster.5gc6d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority