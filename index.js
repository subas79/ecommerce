const express = require('express');
const app = express();
const mongoose = require('mongoose')
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")

mongoose.connect("mongodb://0.0.0.0:27017/e-com").then(()=> console.log("db connection successful")).catch((err)=> console.log(err))

app.use(express.json())
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);

app.listen(5000, ()=>{
    console.log("server running")
})