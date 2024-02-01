const User = require("../models/User");
const { verifyTokenAndAuthirization } = require("./verifyToken");

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

module.exports = router;
