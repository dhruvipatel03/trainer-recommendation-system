import express from 'express'
import { registerUser , loginUser, getprofile } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register' , registerUser)
userRouter.post('/login' , loginUser)

userRouter.get('/get-profile', getprofile)

export default userRouter
