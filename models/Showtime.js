const mongoose = require("mongoose");
const { Schema } = mongoose;

const ShowtimeSchema = new mongoose.Schema({
  start_at: {
    type: Date,
    require: true,
  },
  end_at: {
    type: Date,
    require: true,
  },
  numerical_order: {
    type: Number,
    require: true,
  },
  movie: { type: Schema.Types.ObjectId, ref: "Movie" },
  room: { type: Schema.Types.ObjectId, ref: "Room" },
  tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
});

module.exports = mongoose.model("Showtime", ShowtimeSchema);
