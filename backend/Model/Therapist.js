const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TherapistSchema = Schema({
  docName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  qualifications: {
    type: Array,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  languages: {
    type: Array,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Therapist", TherapistSchema);
