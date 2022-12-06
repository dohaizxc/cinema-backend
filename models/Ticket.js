const mongoose = require("mongoose");
const { Schema } = mongoose;

const TicketSchema = new mongoose.Schema({
  showtime: { type: Schema.Types.ObjectId, required: true, ref: "Showtime" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  seat: { type: Number, required: true },
  foods: [
    {
      food_id: Number,
      quantity: Number,
    },
  ],
  total: Number,
});

module.exports = mongoose.model("Ticket", TicketSchema);
