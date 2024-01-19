const express = require('express')
const router = express.Router();
const {postProfile , getProfile  , getProfilesByUsername} = require('../controller/profileController')


// Register

router.post("/", postProfile);

// Get All
router.get("/" ,getProfile);

// Get by id

router.get("/:username", getProfilesByUsername);


module.exports = router;
  