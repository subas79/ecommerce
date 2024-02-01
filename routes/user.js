const User = require("../models/User");
const { verifyTokenAndAuthirization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

router.put("/:id", verifyTokenAndAuthirization, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete("/:id", verifyTokenAndAuthirization,  async(req, res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User deleted successfully")
    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/:id", verifyTokenAndAdmin,  async(req, res)=>{
    try{
       const user = await User.findById(req.params.id);
       const {password, ...other} = user._doc;
        res.status(200).json(other);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/", verifyTokenAndAdmin,  async(req, res)=>{
    try{
       const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;