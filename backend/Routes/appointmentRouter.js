const express = require('express')
const appointment = require('../Model/appointment');
const router = express.Router();
const mailDoc = require("../Services/EmailDoc");
const mailUser = require('../Services/EmailUser');


router.post("/addappointment", async (req, res) => {

    const email = 'jenish.kotecha1610@gmail.com'
    try {

        const appointments = new appointment({
            user: req.body.user,
            doctor: req.body.doctor,
            name : req.body.name,
            problem: req.body.problem,
            date: req.body.date,
            gender: req.body.gender,
            city: req.body.city,
            area: req.body.area,
        });
        appointments.save()
        res.json({
            message: 'appointment added'
        });
        mailDoc(email);
        mailUser(req.body.user);
        res.json({
            message: 'email sent successfully'
        })
    }
    catch (error) {
        console.log(error.message);
    }
});

module.exports = router;
