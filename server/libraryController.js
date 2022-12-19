const express = require("express");
const router = express.Router();
const User = require("./user");

router.post("/", async (req, res) => {
  try {
    // Get user input
    const { gameId, username } = req.body;

    const user = await User.findOne({ username });

    if (user && !user.library.includes(gameId)) {
      var tempLibrary = user.library;
      tempLibrary.push(gameId);
      let doc = await User.findOneAndUpdate(
        { username: username },
        { library: tempLibrary },
        {
          new: true,
        }
      );
      return res.status(200).json(doc);
    } else {
      return res.status(400).send({ error: "Game Already Exists" });
    }
  } catch (err) {
    // Internalll Error
    return res.status(500).send({ error: "Internal Server Error" });
  }
});

module.exports = router;
