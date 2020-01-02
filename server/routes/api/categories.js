const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const { check, validationResult } = require('express-validator');

const Category = require('../../models/Category');
const User = require('../../models/User');

//@route    GET api/categories
//@desc     Get all categories
//@access   private / Restricted
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    if (!user.isAdmin || !user.isSuperAdmin) {
      res.status(401).json({ msg: 'Unauthorised access' });
    }

    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

//@route    POST api/category
//@desc     Create new category
//@access   private / Restricted
router.post(
  '/',
  [
    auth,
    [
      check('Name', 'Title of category is required')
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

    const { name, parent, path } = req.body;

    //Build category object
    const categoryFields = {};
    if (name) categoryFields.name = name;
    if (parent) categoryFields.parent = parent;
    if (path) categoryFields.path = path;

    try {
      let category = await Category.findById(req.body.id);
      if (category) {
        //update category
        category = await Category.findOneAndUpdate(
          { _id: req.body.id },
          { $set: categoryFields },
          { new: true, upsert: true }
        );
        return res.json(category);
      }

      category = new Category(categoryFields);
      await category.save();
      res.json(category);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: 'Server Error' });
    }
  }
);

//@route    DELETE api/category/:id
//@desc     Delete category by id
//@access   private / Restricted
router.delete('/:id', auth, async (req, res) => {
  try {
    const categories = await Category.findById(req.params.id);
    const user = await User.findById(req.user.id).select('-password');

    if (!user.isAdmin || !user.isSuperAdmin) {
      res.status(401).json({ msg: 'Unauthorised access' });
    }

    if (!categories) {
      return res.status(404).json({ msg: 'Category does not exist' });
    }

    await Category.remove();

    res.status(200).json({ msg: 'Category removed' });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
