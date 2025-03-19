import express from 'express'
import { tutorList , loginTutor } from '../controllers/tutorController.js'

const tutorRouter = express.Router()

tutorRouter.get('/list', tutorList)
tutorRouter.post('/login' , loginTutor)


export default tutorRouter