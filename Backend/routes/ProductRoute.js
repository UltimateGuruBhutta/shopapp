import express from 'express';
import { createProduct } from '../controller/ProductController.js'



const router = express.Router();


router.post('/add',createProduct);

export default router;