const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
      type: String,
      require: true,
    },
    image: {
      type: Array,
      require: true,
    },
    categories: {
      type: Array,
    },
    size: {
        type: String,
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
        require: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('product', ProductSchema)
