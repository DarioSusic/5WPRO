const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    company: {
      type: String
    },
    website: {
      type: String
    },
    bio: {
      type: String
    },
    location: {
      type: String
    },
    social: {
      youtube: {
        type: String
      },
      twitter: {
        type: String
      },
      facebook: {
        type: String
      },
      linkedin: {
        type: String
      },
      instagram: {
        type: String
      }
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = Profile = mongoose.model('profile', ProfileSchema);
