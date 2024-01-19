const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    username : {type : String , required : true} , 
    documenttitle : {type : String , required : true} , 
    documentlink : {type : String , required : true}
})

const Document = mongoose.model("document" , documentSchema);

module.exports = Document;
