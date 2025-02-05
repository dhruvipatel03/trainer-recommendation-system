import express from 'express'
import { addtutor , loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'

const adminRouter = express.Router()

adminRouter.post('/add-tutor', authAdmin, upload.single('image'), addtutor)
adminRouter.post('/login', loginAdmin)

export default adminRouter