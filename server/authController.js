const express = require("express");
const router = express.Router();
const User = require("./user");

router.post("/login", async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      return res.status(400).send({error: "Please provide all input"});
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && user.password === password) {
      return res.status(200).json(user);
    } else {
      return res.status(400).send({error: "Invalid Credentials"});
    }
  } catch (err) {
    // Internalll Error
    return res.status(500).send({error: "Internal Server Error"});
  }
});

router.post("/signup", async (req, res) => {
  try {
    // Get user input
    const { username, email, password } = req.body;

    // Validate user input
    if (!(email && password && username)) {
      return res.status(400).send({error: "Please provide all input"});
    }
    // Validate if user exist in our database
    var user = await User.findOne({ email });

    if (user) return res.status(400).send({error: "User Already Exists"});

    // Validate if user exist in our database
    user = await User.findOne({ username });

    if (user) {
      return res.status(400).send({error: "User Already Exists"});
    }

    // Create user in our database
    const newUser = await User.create({
      email,
      username,
      password,
    });
    return res.status(201).json(newUser);
  } catch (err) {
    // Internalll Error
    return res.status(500).send({error: "Internal Server Error"});
  }
});
module.exports = router;
