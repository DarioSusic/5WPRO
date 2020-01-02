const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    parent: {
      type: String
    },
    path: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = User = mongoose.model('user', UserSchema);
