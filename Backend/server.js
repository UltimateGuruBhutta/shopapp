// const express = require('express')
// const port = 3000;
// const app=express();


// const addproduct=require('./routes/AddProductRoute.js')


// app.use('/AddProduct',addproduct);


// app.listen(port,()=>{
//     console.log("Server is running and listening request...")
// })




const express = require('express');
const port = 3000;
const app = express();

const addProduct = require('./routes/AddProductRoute.js');

app.use('/AddProduct', addProduct);

app.listen(port, () => {
    console.log("Server is running and listening to requests...");
});










