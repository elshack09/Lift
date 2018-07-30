const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')

const Profile = require('../../models/Profile')

const User = require('../../models/User')


// GET route
router.get("/", (req, res) => res.json({ msg: "Route for Profile" }));


// Profile for current user

module.exports = router;
