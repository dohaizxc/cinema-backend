const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  image: String,
  director: [String],
  actors: [String],
  genre: [String],
  releaseDate: Date,
  duration: Number,
  language: String,
});

module.exports = mongoose.model("Movie", MovieSchema);
