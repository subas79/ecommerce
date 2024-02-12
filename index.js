const express = require('express');
const app = express();
const {json} = require('body-parser')
const mongoose = require('mongoose')
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
var cors = require('cors')

mongoose.connect("mongodb://0.0.0.0:27017/e-com").then(()=> console.log("db connection successful")).catch((err)=> console.log(err))

app.use(cors()) 
app.use(json())
// app.use(express.json())
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/products', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/order', orderRoute);

app.listen(5000, ()=>{
    console.log("server running")
})