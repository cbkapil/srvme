import mongoose from "mongoose";

// Defining Schema
const customerSchema = new mongoose.Schema({
  
  first_name:{type:String, required:true, trim:true},
  last_name:{type:String, required:true, trim:true},
  email:{type:String, required:true, trim:true},
  order_date:{type:String, required:true, trim:true},
  order_time:{type:String, required:true, trim:true},
  review:{type:String, required:true, trim:true},
  star:{type:String, required:true, trim:true},
  payment_mode:{type:String, required:true, trim:true},
  description:{type:String, required:true, trim:true},





})

// Model 
const CustomerModel = mongoose.model("customer", customerSchema)

export default CustomerModel