import mongoose from "mongoose";

// Defining Schema
const providerSchema = new mongoose.Schema({
  
  username:{type:String, required:true, trim:true},
  password:{type:String, required:true, trim:true},
  last_name:{type:String, required:true, trim:true},
  first_name:{type:String, required:true, trim:true},
  order_date:{type:String, required:true, trim:true},
  order_time:{type:String, required:true, trim:true},
  email:{type:String, required:true, trim:true},
  phoneno:{type:String, required:true, trim:true},



})

// Model 
const ProviderModel = mongoose.model("provider", providerSchema)

export default ProviderModel