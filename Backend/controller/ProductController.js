import NewProduct from "../models/CreateProductModel.js";

export const createProduct = async (req, res) => {
  try {
    // Assuming other product information is sent along with images in the request body
    const productData = {
      ...req.body,
      images: req.files.map((file) => file.buffer),
    };
    console.log("images in server : " , req.body.images)
    const product = new NewProduct(productData);
    const savedProduct = await product.save();

    res.status(201).json({ savedProduct });
  } catch (error) {
    console.error("Controller error", error);
    res
      .status(500)
      .json({ message: "Error creating product", error: error.message });
  }
};
