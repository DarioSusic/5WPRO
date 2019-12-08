const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Product = require('../../models/Product');

//@route    GET api/products
//@desc     Test route
//@access   public
router.get('/', (req, res) => res.send('Products route'));

module.exports = router;
