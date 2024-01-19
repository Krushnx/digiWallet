const profileSchema = require("../models/profileSchema");

const postProfile = async (req, res) => {
  const newEntry = new profileSchema({
    username: req.body.username,
    profiletitle: req.body.profiletitle,
    profilelink: req.body.profilelink,
  });

  try {
    const postEntry = await newEntry.save();
    res.json(postEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const profile = await profileSchema.find();
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
};

const getProfilesByUsername = async (req, res) => {
  try {
    const { username } = req.params; // Assuming username is passed as a URL parameter

    // Use the correct field for filtering by username
    const profiles = await profileSchema.find({ username: new RegExp(username, 'i') });

    res.json(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
};




module.exports = { postProfile, getProfile  , getProfilesByUsername};
