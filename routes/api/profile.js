const express = require ('express')
const router = express.Router();

// GET route
router.get('/', (req,res) => res.json({msg: "Route for Profile"}))

module.exports = router