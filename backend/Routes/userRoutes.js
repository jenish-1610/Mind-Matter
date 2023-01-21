const express = require("express");
const User = require("../Model/User");
const mailer = require("../Services/EmailServices");
const router = express.Router();

const OTPS = require("../Model/Otp");
// const { validate } = require("../Model/User");

router.post("/cotp", async (req, res) => {
  const login_users = await User.findOne({
    email: req.body.email,
  });
  console.log(req.body.email);
  console.log(login_users);

  if (login_users) {
    const otpp = await OTPS.findOne({
      user: login_users._id,
      otp: req.body.otp,
    });

    console.log(otpp);

    if (otpp) {
      login_users.validate = true;
      login_users.save();
      otpp.remove();
      res.json({
        code: 200,
        status: "Registered sucessfully",
      });
    } else {
      login_users.remove();
      res.json({
        code: 500,
        status: "User not found",
      });
    }
  } else {
    // login_users.remove();
    res.json({
      code: 500,
      status: "Something went wrong",
    });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const available_users = await User.find({
      email: req.body.email,
    });
    if (available_users.length) {
      res.json({
        code: 100,
        status: "email already registered",
      });
    } else {
      const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      });
      user.save();
      let otp = Math.floor(Math.random() * 1000000);
      let ot = new OTPS({
        user: user,
        otp: otp,
      });
      ot.save();
      mailer(req.body.email, otp);
      res.json({
        code: 200,
        status: "registered sucessfully",
      });
    }
  } catch (error) {
    res.json({
      code: 300,
      status: "something went wrong",
    });
  }
});

router.post("/login", async (req, res) => {
  const entered_email = await User.find({
    $or: [{ username: req.body.username }, { email: req.body.username }],
  });

  if (entered_email.length) {
    if (entered_email[0].password === req.body.password) {
      res.json({
        code: 200,
        status: "Login sucessfully",
      });
    } else {
      res.json({
        code: 100,
        status: "Invalid credentials",
      });
    }
  } else {
    res.json({
      code: 100,
      status: "Invalid credentials",
    });
  }
});

module.exports = router;
