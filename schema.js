import mongoose from "mongoose";
const schem={
name:{
    type:String,
    required:true,
},
age:{
    type:Number,
    required:true,
}




};
const userschema=new mongoose.Schema(schem);
export const user=mongoose.model('testdatabase',userschema);
