const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
  room_number: {
    type: Number,
    require: true,
  },
  showtime: [{ type: Schema.Types.ObjectId, ref: "Showtime" }],
  cinema: { type: Schema.Types.ObjectId, ref: "Cinema" },
});

module.exports = mongoose.model("Room", RoomSchema);
