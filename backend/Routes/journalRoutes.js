const express = require("express");
const User = require("../Model/User");
const Journal = require("../Model/journal");

const router = express.Router();

router.put("/updatejournal/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let updatejournal = await Journal.findOne({
      _id: id,
    });

    updatejournal.title = req.body.title;
    updatejournal.content = req.body.content;
    updatejournal.time = Date();

    updatejournal.save();
    res.json({
      message: "journal updated",
    });
  } catch (error) {
    res.json({
      message: "something went wrong",
    });
  }
});

router.delete("/deletejournal/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletejournal = await Journal.findOne({
      _id: id,
    });
    // console.log(deletejournal);

    deletejournal.remove();
    res.json({
      message: "journal delete",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
  // try {
  //     Journal.remove({
  //         _id: id,
  //     })
  //     res.json({
  //         message : 'journal removed'
  //     })
  // } catch (error) {
  //     res.json({
  //         message : error.message,
  //     })
  // }
});

router.get("/getalljournal/:email", async (req, res) => {
  // console.log(req.body);
  const email = req.params.email;
  const user = await User.find({
    email: email,
  });
  //   console.log(user);
  if (user) {
    const journalss = await Journal.find({
      user: user[0],
    });
    res.json({
      journalss: journalss,
    });
  } else {
    res.json({
      message: "user not found!!",
    });
  }
});

router.get("/getJournal/:id", async (req, res) => {
  const id = req.params.id;

  const journal = await Journal.findOne({
    _id: id,
  });
  res.json({
    journal: journal,
  });
});

router.post("/addjournal", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    // console.log(user);
    if (user) {
      const journal = new Journal({
        user: user,
        title: req.body.title,
        content: req.body.content,
      });
      journal.save();
      //   console.log("Journal added");
      res.json({
        message: "added journal",
      });
    } else {
      res.json({
        message: "user not found",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
