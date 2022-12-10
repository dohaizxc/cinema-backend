const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },

  phoneNumber: {
    type: String,
    require: true,
  },

  dayOfBirth: {
    type: Date,
  },

  gender: {
    type: String,
  },

  name: {
    type: String,
    require: true,
  },
  ticket: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
});

module.exports = mongoose.model("User", UserSchema);
