import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import {v2 as cloudinary} from 'cloudinary'
import tutorModel from "../models/tutorModel.js";
import appointmentModel from "../models/appointmentmodel.js";

//API to register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !password || !email) {
      return res.json({ success: false, message: "missing Details" });
    }
    //validating email format
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid email" });
    }
    //validating password
    if (password.length < 8) {
      return res.json({ success: false, message: "Enter a strong password" });
    }
    //hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};
//API for userlogin
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

const getprofile = async (req, res) => {
  try {
    console.log("Headers Received:", req.headers); // Debugging

    const token = req.headers.token; // Extract token from headers
    if (!token) {
      return res.json({ success: false, message: "Token is missing" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decode the token
      console.log("Decoded Token:", decoded); // Debugging

      const userId = decoded.id; // Extract user ID from the decoded token
      if (!userId) {
        return res.json({
          success: false,
          message: "User ID is missing in token",
        });
      }

      const userData = await userModel.findById(userId).select("-password");
      if (!userData) {
        return res.json({ success: false, message: "User not found" });
      }

      res.json({ success: true, userData });
    } catch (error) {
      return res.json({ success: false, message: "Invalid token" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.json({ success: false, message: error.message });
  }
};
//API to update user profile

const updateProfile = async (req, res) => {
  try {
    // Get token from headers
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.json({ success: false, message: "Token is missing" });
    }

    // Verify and decode the token
    const decoded = jwt.verify(token, "your_secret_key"); // Use the same secret key as in login
    const userId = decoded.id; // Extract user ID from token payload

    console.log("Extracted User ID:", userId);

    const { name, phone, address, dob, gender } = req.body;
    const imageFile = req.file;

    if (!name || !phone || !dob || !gender) {
      return res.json({ success: false, message: "Data Missing" });
    }

    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      gender,
    });

    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageURL = imageUpload.secure_url;
      await userModel.findByIdAndUpdate(userId, { image: imageURL });
    }

    res.json({ success: true, message: "Profile updated" });
  } catch (error) {
    console.error("Error:", error);
    res.json({ success: false, message: error.message });
  }
}






// // API to book appointment (not working cause useid is not fetched from req.body, but it is correct)

// const bookAppointment = async (req, res) =>{

//   try {
    
//     const {userId, tutorId, slotDate, slotTime } = req.body

//     const tutorData = await tutorModel.findById(tutorId).select('-password')

//     if (!tutorData.available){
//       return res.json({success:false, message: 'Tutor not available'})
//     }

//     let slots_booked = tutorData.slots_booked

//     // checking for slots availability
//     if(slots_booked[slotDate]){
//       if(slots_booked[slotDate].includes(slotTime)){
//         return res.json({success:false, message: 'Slot not available'})
//       } else {
//         slots_booked[slotDate].push(slotTime)
//       }
//     } else{
//       slots_booked[slotDate] = []
//       slots_booked[slotDate].push(slotTime)
//     }

//     const userData = await userModel.findById(userId).select('-password')

//     delete tutorData.slots_booked

//     const appointmentData = {
//       userId,
//       tutorId,
//       userData,
//       tutorData,
//       amount: tutorData.fees,
//       slotTime,
//       slotDate,
//       date: Date.now()
//     }

//     const newAppointment = new appointmentModel(appointmentData)
//     await newAppointment.save()
    
//     // save new slots data in tutorData
//     await tutorModel.findByIdAndUpdate(tutorId,{slots_booked})

//     res.json({success: true, message: 'Appointment booked'})

//   } catch (error) {
//     console.error("Error:", error);
//     res.json({ success: false, message: error.message });
//   }
// }



// API to book appointment (after adding consoe.log to the above code, check in the terminal after booking an appointment.) 
const bookAppointment = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { userId, tutorId, slotDate, slotTime } = req.body;

    if (!userId || !tutorId || !slotDate || !slotTime) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    const tutorData = await tutorModel.findById(tutorId).select('-password');
    if (!tutorData) {
      return res.json({ success: false, message: "Tutor not found" });
    }

    if (!tutorData.available) {
      return res.json({ success: false, message: "Tutor not available" });
    }

    let slots_booked = tutorData.slots_booked || {};

    // Check for slot availability
    if (!slots_booked[slotDate]) {
      slots_booked[slotDate] = [];
    }
    if (slots_booked[slotDate].includes(slotTime)) {
      return res.json({ success: false, message: "Slot not available" });
    }
    slots_booked[slotDate].push(slotTime);

    const userData = await userModel.findById(userId).select('-password');
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    const appointmentData = {
      userId,
      tutorId,
      userData,
      tutorData,
      amount: tutorData.fees,
      slotTime,
      slotDate,
      date: Date.now(),
    };

    const newAppointment = new appointmentModel(appointmentData);
    await newAppointment.save();

    await tutorModel.findByIdAndUpdate(tutorId, { slots_booked });

    res.json({ success: true, message: "Appointment booked" });
  } catch (error) {
    console.error("Error:", error);
    res.json({ success: false, message: error.message });
  }
};


export { registerUser, loginUser, getprofile , updateProfile, bookAppointment };
