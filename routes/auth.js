const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const newUser = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });
  try { 
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err); 
  } 
});

router.post("/login", async(req, res)=>{
    try{
        const user = await User.findOne( {userName: req.body.userName})
        !user && res.status(401).json("wrong credentials!")
        user.password !== req.body.password && res.status(401).json("wrong credential!");
        const {password, ...other} = user._doc;
        res.status(200).json(other);
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;
