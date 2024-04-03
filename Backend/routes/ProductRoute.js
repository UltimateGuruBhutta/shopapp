import express from "express";
import { createProduct,productList,singleProduct } from "../controller/ProductController.js";
import { upload } from "../multerConfig.js";

const router = express.Router();

router.post("/add", upload.array('images', 10), createProduct);
router.get("/list",productList);
router.get("/:id",singleProduct);

export default router;




