const express = require("express");
const mongoose = require("mongoose");


const app = express();
const url = "mongodb://localhost/users";

mongoose.connect(url, { useNewUrlParser: true }).then(() => {
    console.log("connection success");
});

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
