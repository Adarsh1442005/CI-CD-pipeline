import express from 'express';
import mongoose from 'mongoose';
import { user } from './schema.js';
import cors from 'cors';

export const app=express();
const port=process.env.PORT|| 3000;



const mongouri="mongodb+srv://aadi:Adarsh1442005@cluster0.nc0yl.mongodb.net/CICDChecking";
//mongodb connection
async function connectDB() {
  try {
    await mongoose.connect(mongouri
    );
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Connection error:", err);
  }
}
connectDB();

const getuser= async (req,res)=>{
     try {
    const users = await user.find();   // fetch all documents from 'users' collection
    res.status(200).json(users);       // send them back as JSON
  } catch (err) {
    res.status(500).json({ error: err.message }); // handle errors gracefully
  }



}
const del=async ()=>{
   await user.deleteMany({});
}
// del();
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



app.get('/users',getuser);
