import mongoose from "mongoose";

// Defining Schema
const holdSchema = new mongoose.Schema({
  
  reason:{type:String, required:true, trim:true},
  duration:{type:String, required:true, trim:true},
  date:{type:String, required:true, trim:true},
  time:{type:String, required:true, trim:true},

})

// Model 
const HoldModel = mongoose.model("hold", holdSchema)

export default HoldModel