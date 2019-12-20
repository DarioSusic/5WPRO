const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: [true, 'Please Enter your SKU']
    },
    title: {
      type: String,
      trim: true,
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
      price: {
        type: Number,
        required: [true, 'Please Enter your product price']
      },
      discount: {
        type: Number,
        default: 0
      }
    },
    manufacture_details: {
      bar_code: {
        type: String
      },
      release_date: {
        type: Date
      }
    },
    shipping_details: {
      weight: {
        type: Number
      },
      width: {
        type: Number
      },
      height: {
        type: Number
      },
      depth: {
        type: Number
      }
    },
    categories: [String],
    date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = Products = mongoose.model('product', ProductSchema);
