import express from "express";
import { createProduct } from "../controller/ProductController.js";
import { upload } from "../multerConfig.js";

const router = express.Router();

router.post("/add", upload.array('images', 10), createProduct);

export default router;
