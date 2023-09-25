import mongoose from "mongoose";

const userSchemaa=  new mongoose.Schema({
  name:{
         type:String,
         required:true
  },

  username:{
    type:String,
    required:true,
    // unique:true
  },

  password:{
    type:String,
    required:true
  }

},{timestamps:true})

const Userp=mongoose.model('Userp',userSchemaa);

export default Userp;