import express from 'express'
import {createUser} from '../controller/UserController.js'
import { upload } from '../multerConfig.js';




const router=express.Router();


router.post('/createUser',upload.single("picture"),createUser);

export default router;