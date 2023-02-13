const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const journalSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date(),
  },
});
module.exports = mongoose.model("journalSchema", journalSchema);
