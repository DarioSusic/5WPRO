const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const { check, validationResult } = require('express-validator');

const Product = require('../../models/Product');
const User = require('../../models/User');

//@route    GET api/product
//@desc     Get all products
//@access   public
router.get('/', auth, async (req, res) => {
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

//@route    POST api/product
//@desc     Create new product
//@access   private
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      if (!user.isAdmin || !user.isSuperAdmin) {
        res.status(401).json({ msg: 'Unouthorised access' });
      }

      //TODO add other fields from product schema
      const newProduct = new Product({
        title: req.body.title,
        description: req.body.description,
        quantity: req.body.quantity,
        pricing: { price: req.body.price },
        sku: req.body.sku,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });

      const product = await newProduct.save();

      res.json(product);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: 'Server Error' });
    }
  }
);

//@route    DELETE api/product/:id
//@desc     Delete product by id
//@access   private
router.delete('/:id', auth, async (req, res) => {
  try {
    const product = await Post.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: 'Product does not exist' });
    }

    if (!user.isAdmin || !user.isSuperAdmin) {
      res.status(401).json({ msg: 'Unouthorised access' });
    }

    await product.remove();

    res.status(200).json({ msg: 'Product removed' });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
