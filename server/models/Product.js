const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    sku: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Please Enter your product name']
    },
    description: {
      type: String
    },
    availability: {
      type: Boolean
    },
    quantity: {
      type: Number,
      required: [true, 'Please Enter quantity of product']
    },
    pricing: {
      type: Number,
      required: [true, 'Please Enter your product price']
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = Products = mongoose.model('product', ProductSchema);
