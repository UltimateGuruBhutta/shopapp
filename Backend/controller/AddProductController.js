import model from '../models/CreateProductModel';



const createProduct = async (req,res)=>{

    const [{_id,name,description,size,price,stock,discount}] =req.body;

    res.send(`ok i received the message id: ${_id} name:${name} description: ${description} size : ${size} price : ${price}` );
    

}