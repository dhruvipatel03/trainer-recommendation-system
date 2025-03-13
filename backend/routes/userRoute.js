import express from 'express'
import { registerUser , loginUser, getprofile , updateProfile, bookAppointment } from '../controllers/userController.js'
import upload from '../middlewares/multer.js'

const userRouter = express.Router()

userRouter.post('/register' , registerUser)
userRouter.post('/login' , loginUser)

userRouter.get('/get-profile',getprofile)
userRouter.post('/update-profile',upload.single('image'),updateProfile)
userRouter.post('/book-appointment', bookAppointment)

export default userRouter
