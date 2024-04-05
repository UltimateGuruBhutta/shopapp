import sharp from "sharp";
import NewProduct from "../models/CreateProductModel.js";
export const createProduct = async (req, res) => {
  try {
    let imgPromises = req.files.map(file =>
      sharp(file.buffer)
        .resize(270, 370, {
          fit: 'fill'
        })
        .toBuffer()
    );

    // Wait for all promises to resolve
    let imgs = await Promise.all(imgPromises);

    const productData = {
      ...req.body,
      color: JSON.parse(req.body.color),
      size: JSON.parse(req.body.size),
      images: imgs, // Use the processed images
    };

    console.log("Server Received Request to create Product: ");
    const product = new NewProduct(productData);
    const savedProduct = await product.save();

    res.status(201).json({ savedProduct });
  } catch (error) {
    console.error("Controller error", error);
    res.status(500).json({ message: "Error creating product", error: error.message });
  }
};


export const productList = async (req, res) => {
  
  const list = await NewProduct.find({},{ __v:0}).exec();
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