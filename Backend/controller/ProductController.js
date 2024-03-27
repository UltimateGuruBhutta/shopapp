import NewProduct from '../models/CreateProductModel.js'


export const createProduct = async (req,res)=>{

    try{
        const product = new NewProduct(req.body);
    
        const saveProduct= await product.save();
    
        res.status(201).json({saveProduct});
        

    }
    catch(error){

        console.error(" Controller error ", error);
        
        res.status(500).json({ message: "Error creating product", error: error.message });


    }

}
 