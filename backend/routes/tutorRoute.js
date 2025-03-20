import express from 'express'
import { tutorList , loginTutor , appointmentsTutor ,appointmentComplete , appointmentCancel , tutorDashboard ,tutorProfile, updateTutorProfile } from '../controllers/tutorController.js'
import authTutor from '../middlewares/authTutor.js'


const tutorRouter = express.Router()

tutorRouter.get('/list', tutorList)
tutorRouter.post('/login' , loginTutor)
tutorRouter.get('/appointments',authTutor, appointmentsTutor)
tutorRouter.post('/complete-appointment' , authTutor , appointmentComplete)
tutorRouter.post('/cancel-appointment' , authTutor , appointmentCancel)
tutorRouter.get('/dashboard',authTutor , tutorDashboard)
tutorRouter.get('/profile',authTutor,tutorProfile)
tutorRouter.post('/update-profile',authTutor,updateTutorProfile)




export default tutorRouter