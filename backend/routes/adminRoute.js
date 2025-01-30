import express from 'express'
import { addtutor } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'

const adminRouter = express.Router()

adminRouter.post('/add-tutor', upload.single('image'), addtutor)

export default adminRouter