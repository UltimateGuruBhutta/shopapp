import NewProduct from "../models/CreateProductModel.js";

export const createProduct = async (req, res) => {
  try {
    // Assuming other product information is sent along with images in the request body
    const productData = {
      ...req.body,
      images: req.files.map((file) => file.buffer),
    };
    console.log("images in server : ", req.body.images);
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

export const productList = async (req, res) => {
  
  const list = await NewProduct.find({},{createdAt:0,updatedAt:0,__v:0,images:0}).exec();
  res.json(list);
  console.log("in controller line passed")
  console.log("Server recived Request : Length : ", list.length);
};


export const singleProduct=async (req,res)=>{


  const _id=req.params.id;
  console.log(" req.params.id ", _id);
try{
const product= await NewProduct.find({_id},{createdAt:0,updatedAt:0,__v:0}).exec();
// console.log("At server product we geting",product);
res.json(product);

}
catch(error)
{
  console.log("We got error from database",error);
}


}