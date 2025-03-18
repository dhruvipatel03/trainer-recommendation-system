import express from 'express'
import { addtutor , allTutors, loginAdmin , appointmentsAdmin} from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailability } from '../controllers/tutorController.js'


const adminRouter = express.Router()

adminRouter.post('/add-tutor', upload.single('image'), addtutor)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/all-tutors', allTutors)
adminRouter.post("/change-availability", changeAvailability)
adminRouter.get('/appointments',appointmentsAdmin)

export default adminRouter