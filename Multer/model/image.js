const mongoose=require("mongoose");

const imageSchema=new mongoose.Schema({
    filename:String,
    filepath: String
})

module.exports=mongoose.model("Image", imageSchema);