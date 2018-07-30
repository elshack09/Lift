const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");

// GET route
router.get("/", (req, res) => res.json({ msg: "Route for Users" }));

// route to signup user and prevent multiple emails from signup
router.post("/signup", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res
        .status(400)
        .json({ email: "Account with this email already created." });
    } else {
      const signUpUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      // encrypting password with 6 characters
      bcrypt.genSalt(6, (err, salt) => {
        bcrypt.hash(signUpUser.password, salt, (err, hash) => {
          if (err) console.log(err);
          signUpUser.password = hash;
          signUpUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
