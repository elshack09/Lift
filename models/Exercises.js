const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
  name: {
    type: String
  },
  type: {
    type: String
  },
  pounds: {
    type: Number
  },
  reps: {
    type: Number
  }
});

module.exports = Exercises = mongoose.model("exercises", ExercisesSchema);
