import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'


//API to register user
const registerUser = async(req , res) =>{
    try {
        const {name , email , password} = req.body
        if(! name || !password || !email)
        {
            return res.json({success:false , message:"missing Details"})
        }
        //validating email format
        if(!validator.isEmail(email)){
            return res.json({success:false , message:"Enter a valid email"})
        }
        //validating password
        if(password.length<8){
            return res.json({success:false , message:"Enter a strong password"})
        }
        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const userData = {
            name,
            email,
            password:hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
        res.json({success:true , token})
        



    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
}
//API for userlogin
const loginUser = async(req , res)=>{
    try {
        const {email , password} = req.body
        const user = await userModel.findOne({email})

        if (!user) {
           return res.json({ success: false, message:"User does not exist" });
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if(isMatch){
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
            res.json({success:true , token})
        }
        else{
            res.json({success:false , message:"Invalid credentials"})
        }

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
}

// API to get user profile data (this is not working)
// const getprofile = async (req, res) => {

//     try {
//         const { userId } = req.body
//         const userData = await userModel.findById(userId).select('-password')

//         res.json({success: true, userData})

//     } catch (error) {
//         console.error(error);
//         res.json({ success: false, message: error.message });
//     }
// }


//this is working but hardcoded here,
// const getprofile = async (req, res) => {
//     try {
//         // Hardcoding your user ID
//         const userId = "67b42a2da5af7e5e5c7f24cf";

//         // Fetch user from MongoDB
//         const userData = await userModel.findById(userId).select('-password');

//         if (!userData) {
//             return res.json({ success: false, message: "User not found" });
//         }

//         res.json({ success: true, userData });

//     } catch (error) {
//         console.error(error);
//         res.json({ success: false, message: error.message });
//     }
// };

//this is working but have to use userid as parameter evrytime in postman example: get: http://localhost:4000/api/user/get-profile?userId=67b42a2da5af7e5e5c7f24cf
const getprofile = async (req, res) => {
    try {
        const userId = req.query.userId; // Extract from URL params

        if (!userId) {
            return res.json({ success: false, message: "User ID is missing" });
        }

        const userData = await userModel.findById(userId).select('-password');

        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({ success: true, userData });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

export {registerUser , loginUser, getprofile}