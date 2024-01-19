const express = require('express')
const router = express.Router();
const { postDocument, getDocument  , getDocuementByUsername} = require('../controller/documentController')


// Register

router.post("/", postDocument);

// Get All
router.get("/" ,getDocument);

// Get by id

router.get("/:username", getDocuementByUsername);


module.exports = router;
  