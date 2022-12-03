const mongoose = require("mongoose");
const { Schema } = mongoose;

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  image: String,
<<<<<<< HEAD
  director: String,
  actors: String,
  genre: [String],
=======
  director: [String],
  actors: [String],
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
>>>>>>> 82c152fc6298b6db5177ebf594c0b6f918051f6a
  releaseDate: Date,
  endDate: Date,
  duration: Number,
  language: String,
});

module.exports = mongoose.model("Movie", MovieSchema);
