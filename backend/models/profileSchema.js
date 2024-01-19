const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    username : {type : String , required : true} , 
    profiletitle : {type : String , required : true} , 
    profilelink : {type : String , required : true}
})

const Profile = mongoose.model("profile" , profileSchema);

module.exports = Profile;
