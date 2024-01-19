const documentSchema = require("../models/documentSchema");

const postDocument = async (req, res) => {
  const newEntry = new documentSchema({
    username: req.body.username,
    documenttitle: req.body.documenttitle,
    documentlink: req.body.documentlink,
  });

  try {
    const postEntry = await newEntry.save();
    res.json(postEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDocument = async (req, res) => {
  try {
    const document = await documentSchema.find();
    res.json(document);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
};

const getDocuementByUsername = async (req, res) => {
  try {
    const { username } = req.params; // Assuming username is passed as a URL parameter

    // Use the correct field for filtering by username
    const docuements = await documentSchema.find({ username: new RegExp(username, 'i') });

    res.json(docuements);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
};




module.exports = { postDocument, getDocument  , getDocuementByUsername};
