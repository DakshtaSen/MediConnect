import validator from "validator"
import bcrypt, { hash } from 'bcrypt'
import { v2 as cloudinary } from "cloudinary"
import doctorModel from "../models/doctorModel.js"
import jwt from 'jsonwebtoken'


//API for adding doctor

const addDoctor = async (req,res)=>{

  try {

    const { name,email,password, speciality, degree, experience, about, fees, address} = req.body


    console.log("File received:", req.file);

    if (!req.file) {
      return res.json({ success: false, message: "No image file received" });
    }
    const imageFile = req.file

   //here we will add one check ..checking for all data doctor
   if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
    return res.json({success:false,message:"Missing Details"})
   }
   //validating email format 
   if(!validator.isEmail(email)){
     return res.json({success:false,message:"Please Enter a valid email"})
   }
   //validating strong password
   if(password.length<8){
       return res.json({success:false,message:"Please Enter a Strong Password"})
   }
   //hashing doctor password
   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(password, salt)

   //upload image to the cloudinary
   const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
   const imageUrl = imageUpload.secure_url

   //doctor data
   const doctorData = {
    name,
    email,
    image: imageUrl,
    password: hashedPassword,
    speciality,
    degree,
    experience,
    about,
    fees,
    address: address,
    date: Date.now()
   }

   // we create one variable
   const newDoctor = new doctorModel(doctorData)
   //save this data into database
   await newDoctor.save()
   res.json({success:true, message:"Doctor Added"})

  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
    
  }
}

//API for the admin login

const loginAdmin = async (req,res) =>{
  try {
    const {email,password} = req.body
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
     const token = jwt.sign(email + password,process.env.JWT_SECRET)
     res.json({success:true,token})

res.json({success:true, token})

    }else{
      res.json({success:false,message:"Invalid credentials"})
    }
    
  } catch (error) {
     console.log(error)
    res.json({success:false, message:error.message})
  }

}

export {addDoctor,loginAdmin}



// const loginAdmin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
//       // JWT token without expiry
//       const token = jwt.sign(
//         { email, role: "admin" },  // payload
//         process.env.JWT_SECRET     // secret
//       );

//       res.json({ success: true, token });
//     } else {
//       res.json({ success: false, message: "Invalid credentials" });
//     }

//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// export {addDoctor,loginAdmin}