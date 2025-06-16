import express from 'express'
import { addPsychologist, loginAdmin } from '../controllers/adminController.js'
import upload from '../middleware/multer.js'
import authAdmin from '../middleware/authadmin.js'

const adminRouter = express.Router()
adminRouter.post('/add-psychologist',authAdmin,upload.single('image'),addPsychologist)
adminRouter.post('/login',loginAdmin)


export default adminRouter