const express = require('express');
const app = express();
const mongoose = require('mongoose')
const userRoute = require("./routes/user")

mongoose.connect("mongodb://0.0.0.0:27017/e-com").then(()=> console.log("db connection successful")).catch((err)=> console.log(err))

// app.get("/api/test", ()=>{
//     console.log('api successful')
// })

app.use(express.json())
app.use('/api/user', userRoute);

app.listen(5000, ()=>{
    console.log("server running")
})