
require('dotenv').config();

const express = require('express');
const port = process.env.PORT;
const app = express();
const db =require('mongoose')

db.connect(process.env.DB_URL).then(()=>{console.log('Mongodb is connected Atlas Server')}).catch(err=>console.error(' Server unable to connect database'))

const addProduct = require('./routes/AddProductRoute.js');

app.use('/AddProduct', addProduct);

app.listen(port, () => {
    console.log("Server is running and listening to requests...");
});










