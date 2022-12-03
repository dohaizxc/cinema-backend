const mongoose = require("mongoose");
const { Schema } = mongoose;

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  image: String,
  director: [String],
  actors: [String],
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
  releaseDate: Date,
  endDate: Date,
  duration: Number,
  language: String,
});

module.exports = mongoose.model("Movie", MovieSchema);
