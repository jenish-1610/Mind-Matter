const express = require("express");
const Therapist = require("../Model/Therapist");
const router = express.Router();

router.post("/addtherapist", async (req, res) => {
  const doctor = new Therapist({
    docName: req.body.docName,
    email: req.body.email,
    education: req.body.education,
    qualifications: req.body.qualifications,
    specialization: req.body.specialization,
    languages: req.body.languages,
    about: req.body.about,
  });

  try {
    await doctor.save();
    res.json({
      code: 200,
      status: "Doctor Sucessfully Registered",
    });
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/alltherapist", async (req, res) => {
  try {
    const doctors = await Therapist.find();
    res.json({
      doctors: doctors,
    });
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/therapist/:id", async (req, res) => {
  try {
    const doctor = await Therapist.findById(req.params.id);
    res.json({
      doctor: doctor,
    });
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
