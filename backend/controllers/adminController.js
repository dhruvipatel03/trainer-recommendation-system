import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary';
import tutorModel from "../models/tutorModel.js"
import jwt from 'jsonwebtoken'


// API for adding tutor
const addtutor = async(req, res) => {

    try{

       const {name, email, password, speciality, degree, experience, about, fees, address} = req.body
       const imageFile = req.file 

    //checking for all data to add tutor
    if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
        return res.json({success:false , message:"Missing Details"})
    }
    //validating email format
    if (!validator.isEmail(email)) {
        return res.json({success:false , message:"Please enter a valid email"})
    }
    //validate strong password
    if (password.length < 8) {
        return res.json({success:false , message:"Please enter a strong password"})
    }
    // hashing doctor password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password , salt)

    // upload image to cloudinary 
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
    const imageUrl = imageUpload.secure_url

    const tutorData = {
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
    const newTutor = new tutorModel(tutorData)
    await newTutor.save()
    
    res.json({success:true,message:"Tutor Added"})

    }
    catch (error) {

        console.log(error)
        res.json({success:false , message:error.message})
    }
}
//api for the admin login
const loginAdmin = async(req,res) =>{
    try {
        const {email , password} = req.body
        if(email==process.env.ADMIN_EMAIL && password==process.env.ADMIN_PASSWORD)
        {
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true , token})
        }
        else{
            res.json({success:false , message:"Invalid credentials"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//API to get all tutors list for admin panel
const allTutors = async (req, res) => {
    try {
        const tutors = await tutorModel.find({}).select('-password'); // Exclude password field

        console.log("Tutors Retrieved from DB:", tutors); // Debugging log

        if (tutors.length === 0) {
            return res.json({ success: false, message: "No tutors found in the database" });
        }

        res.json({ success: true, tutors });

    } catch (error) {
        console.error("Error fetching tutors:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};


// const allTutors = async (req, res) => {
//     try {
        
//         const tutors = await tutorModel.find({}).select('-password')
//         res.json({success:true, tutors})

//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message}) 
//     }
// }


export {addtutor,loginAdmin,allTutors}