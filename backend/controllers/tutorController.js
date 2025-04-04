import tutorModel from "../models/tutorModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js";

const changeAvailability = async (req, res) => {
    try {
        const { tutorId } = req.body;

        // Check if tutor exists
        const tutorData = await tutorModel.findById(tutorId);
        if (!tutorData) {
            return res.status(404).json({ success: false, message: "Tutor not found" });
        }

        // Toggle availability
        const updatedTutor = await tutorModel.findByIdAndUpdate(
            tutorId,
            { available: !tutorData.available },
            { new: true } // Return updated document
        );

        res.json({ success: true, message: "Availability Changed", updatedTutor });

    } catch (error) {
        console.error(" Error changing availability:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const tutorList = async (req, res)=> {
    try {
        
        const tutors = await tutorModel.find({}).select(['-password', '-email'])

        res.json({success:true, tutors})

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

const loginTutor = async (req, res) => {
    try {
        const { email, password } = req.body;
        const tutor = await tutorModel.findOne({ email });

        if (!tutor) {
            return res.json({ success: false, message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, tutor.password);
        if (isMatch) {
            const token = jwt.sign({ id: tutor._id }, process.env.JWT_SECRET);
            return res.json({ success: true, token }); // ✅ Proper JSON response
        } else {
            return res.json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

//API to get tutor appointments
const appointmentsTutor = async(req , res) =>{
    try {

        const {tutorId} = req.body
        const appointments = await appointmentModel.find({tutorId})
        res.json({success:true , appointments})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
}
//API to mark appointment completed
const appointmentComplete = async(req , res)=>{
    try {
        const {tutorId , appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        if(appointmentData && appointmentData.tutorId===tutorId){
            await appointmentModel.findByIdAndUpdate(appointmentId , {isCompleted:true})
            return res.json({success:true, message:'Appointment completed'})
        }
        else{
            return res.json({success:false, message:'Mark failed'})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message }); 
    }
}

//Api to cancel appointment for tutor panel
const appointmentCancel = async(req , res)=>{
    try {
        const {tutorId , appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        if(appointmentData && appointmentData.tutorId===tutorId){
            await appointmentModel.findByIdAndUpdate(appointmentId , {cancelled:true})
            return res.json({success:true, message:'Appointment Cancelled '})
        }
        else{
            return res.json({success:false, message:'Cancellation failed'})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message }); 
    }
}

//API to get dashboard data for tutor panel
const tutorDashboard = async(req , res ) =>{
    try {
        const {tutorId} = req.body
        const appointments = await appointmentModel.find({tutorId})

        let earnings = 0
        appointments.map((item)=>{
            if (item.isCompleted || item.payment) {
                earnings += item.amount 
            }
        })

        let students = []
        appointments.map((item)=>{
            if(!students.includes(item.userId))
                students.push(item.userId)
        })

        const dashData = {
            earnings , 
            appointments:appointments.length,
            students:students.length,
            latestAppointments:appointments.reverse().slice(0,5)
        }
        res.json({success:true , dashData})
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message }); 
    }
}

//API to get tutor data
const tutorProfile = async(req , res)=>{
    try {
        const {tutorId} = req.body
        const profileData = await tutorModel.findById(tutorId).select('-password')

        res.json({success:true , profileData})
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message }); 
    }
}

//Api to update tutor profile
const updateTutorProfile = async(req , res)=>{
    try {
        const {tutorId , fees , address , available } = req.body
        await tutorModel.findByIdAndUpdate(tutorId , {fees , address , available})
        res.json({success:true , message:'Profile updated'})
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export { changeAvailability, tutorList , loginTutor ,appointmentsTutor , appointmentComplete , appointmentCancel , tutorDashboard , tutorProfile  , updateTutorProfile };

