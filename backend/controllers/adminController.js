import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import tutorModel from "../models/tutorModel.js"


// API for adding tutor
const addtutor = async(req, res) => {

    try{

       const {name, email, password, speciality, degree, experience, about, fees, address} = req.body
       const imageFile = req.file 

       //checking for all data to add tutor
       if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
          return res.json({success:false, message: "Missing Details"})
       }

        //validating email format
        if (!validator.isEmail(email)) {
            return res.json({success:false, message: "Please enter a valid email"})
        }

        //validating strong pass
        if (password.length < 8){
            return res.json({success:false, message: "Please enter a strong password"})
        }

        //hashing tutor pass
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
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
            address: JSON.parse(address),
            date:Date.now()
        }

        const newTutor = new tutorModel(tutorData)
        await newTutor.save()

        res.json({success:true, message:"Tutor added"})

    }
    catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

export {addtutor}