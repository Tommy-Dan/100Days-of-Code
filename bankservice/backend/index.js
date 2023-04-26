const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bankModal = require("./modals/bank");
const accountRoutes = require("./routes/account");
const bankRoutes = require("./routes/bank");
const userRoutes = require("./routes/user");
const cors = require("cors");



const server = express();
const handleError = (req,res,next)=>{
    console.log("Error page executed");
    next();
}

server.use(bodyParser.json());
server.use(cors());


//routes
server.use(accountRoutes);
server.use(bankRoutes);
server.use(userRoutes);
server.get("*",handleError,(req,res)=>{res.send("404 page not found")})


//Start server and connect to database
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://codetrainUser:codetrain12345@cluster0.u1gvbmg.mongodb.net/codetrain?retryWrites=true&w=majority",
{
  useNewUrlParser: true, useUnifiedTopology: true
}).then(result=>{
    server.listen(3000,"localhost",()=>{console.log("server is running on port 3000")});
}).catch(err=> console.log(err));