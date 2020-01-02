const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const { check, validationResult } = require('express-validator');

const Product = require('../../models/Product');
const User = require('../../models/User');

//@route    GET api/product
//@desc     Get all products
//@access   public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().limit(20);
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

//@route    GET api/product/id
//@desc     Get product by id
//@access   public
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    //check if product exist
    if (!product) {
      return res.status(404).json({ msg: 'Product does not exist' });
    }

    res.json(product);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Server Error' });
  }
});

//@route    DELETE api/product/:id
//@desc     Delete product by id
//@access   private / Restricted
router.delete('/:id', auth, async (req, res) => {
  try {
    const product = await Post.findById(req.params.id);
    const user = await User.findById(req.user.id).select('-password');

    if (!user.isAdmin || !user.isSuperAdmin) {
      res.status(401).json({ msg: 'Unauthorised access' });
    }

    if (!product) {
      return res.status(404).json({ msg: 'Product does not exist' });
    }

    await product.remove();

    res.status(200).json({ msg: 'Product removed' });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Server Error' });
  }
});

//@route    POST api/product
//@desc     Create new product
//@access   private / Restricted
router.post(
  '/',
  [
    auth,
    [
      check('title', 'Title of product is required')
        .not()
        .isEmpty(),
      check('quantity', 'Quantity of product is required')
        .not()
        .isEmpty(),
      check('price', 'Price of product is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const user = await User.findById(req.user.id).select('-password');
    if (!user.isAdmin || !user.isSuperAdmin) {
      res.status(401).json({ msg: 'Unauthorised access' });
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      description,
      quantity,
      price,
      discount,
      sku,
      bar_code,
      release_date,
      weight,
      width,
      height,
      depth
    } = req.body;

    //Build product object
    const productFields = {};
    if (title) productFields.title = title;
    if (description) productFields.description = description;
    if (quantity) productFields.quantity = quantity;
    if (sku) productFields.sku = sku;

    productFields.pricing = {};
    if (price) productFields.pricing.price = price;
    if (discount) productFields.pricing.discount = discount;

    productFields.manufacture_details = {};
    if (bar_code) productFields.manufacture_details.bar_code = bar_code;
    if (release_date)
      productFields.manufacture_details.release_date = release_date;

    productFields.shipping_details = {};
    if (weight) productFields.shipping_details.weight = weight;
    if (width) productFields.shipping_details.width = width;
    if (height) productFields.shipping_details.height = height;
    if (depth) productFields.shipping_details.depth = depth;

    try {
      let product = await Product.findById(req.body.id);
      if (product) {
        //update product
        product = await Product.findOneAndUpdate(
          { _id: req.body.id },
          { $set: productFields },
          { new: true, upsert: true }
        );
        return res.json(product);
      }

      product = new Product(productFields);
      await product.save();
      res.json(product);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: 'Server Error' });
    }
  }
);

module.exports = router;
