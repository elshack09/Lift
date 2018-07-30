const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
  }, 
  handle: {
      type: String,
      required: true,
      max: 50
  },
  name: {
      type: String
  },
  dob: {
      type: String
  },
  weight:{
      type: Number
  },
  height: {
      type: String
  },
  date: {
      type: Date, 
      default: Date.now,
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
