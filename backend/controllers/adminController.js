import validator from "validator"
import bycrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary';
import tutorModel from "../models/tutorModel.js"


// API for adding tutor
const addtutor = async(req, res) => {

    try{

       const {name, email, password, speciality, degree, experience, about, fees, address} = req.body
       const imageFile = req.file 

    //    checking for all data to add doctor
    if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
        return res.json({success:false , massage:"Missing Details"})
    }
    //validating email formate
    if (!validator.isEmail(email)) {
        return res.json({success:false , massage:"Please enter a valid email"})
    }
    //validate strong password
    if (password.length < 8) {
        return res.json({success:false , massage:"Please enter a strong password"})
    }
    // hashing doctor password
    const salt = await bycrypt.genSalt(10)
    const hashedPassword = await bycrypt.hash(password , salt)

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
        address:jason.parse(address),
        date:Date.now()

    }
    const newTutor = new tutorModel(tutorData)
    await newTutor.save()
    res.jason({success:true,message:"Tutor Added"})

    }
    catch (error) {

        console.log(error)
        res.json({success:false , message:error.massage})
    }
}

export {addtutor}