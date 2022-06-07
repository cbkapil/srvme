import mongoose from "mongoose";

// Defining Schema
const servSchema = new mongoose.Schema({
  price:{type:String},
  service_name:{type:String, required:true, trim:true},
  checked:{type:Boolean},
  image:{type:String},
  
  
  
  



})

// Model 
const ServiceModel = mongoose.model("service", servSchema)

export default ServiceModel