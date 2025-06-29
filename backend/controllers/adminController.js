//API for adding psychologist
import validator from 'validator'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary';
import psychologistModel from '../models/psychologistModel.js'  
const addPsychologist = async (req, res) => {
  try{
      
      const{name,email,password, speciality, degree,experience, about, fees, address } = req.body;
      const imageFile = req.file
      console.log({name,email,password, speciality, degree,experience, about,  fees, address}, imageFile);
      console.log(req.body);
      
      
      //Checking for all data to add psychologist
      if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
          return res.json({success: false,message: "Missing details"})
      }
      // validating email format
      if(!validator.isEmail(email)){
          return res.json({success: false,message: "Please enter a valid email"})

      }
      // validating strong password
      if(password.length<8){
          return res.json({success: false,message: "Please enter a strong password"})
      }

      // hashing doctor password
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
      
      //upload image to cloudinary
      const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type: "image"})
      const imageUrl = imageUpload.secure_url
      const psychologistData = {
        name,
        email,
        image:imageUrl,
        password:hashedPassword,
        speciality,
        degree,
        experience,
        about,
        fees,
        address:JSON.parse(address),
        date:Date.now()
      }
      const newPsychologist = new psychologistModel(psychologistData)
      await newPsychologist.save()
      res.json({success: true,message: "Psychologist added successfully"})
    }catch(error){
        console.log(error);
        res.json({success: false,message: error.message})
  }
}

//API for admin login
const loginAdmin = async (req, res) => {
  try {
    const {email, password} = req.body
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(email+password,process.env.JWT_SECRET)
      res.json({success: true, token})
    }else{
      res.json({success: false, message: "Invalid credentials"})
    }
  } catch (error) {
    console.log(error);
    res.json({success: false,message: error.message})
  }
}
export {addPsychologist, loginAdmin}