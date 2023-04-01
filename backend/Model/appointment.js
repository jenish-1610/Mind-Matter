const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appointmentSchema = mongoose.Schema({
  user: {
    type: Schema.Types.String,
    ref: "User",
    required: true,
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Therapist",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("appointmentSchema", appointmentSchema);
