import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import db from 'mongoose';
import cors from 'cors'
import productRoute from './routes/ProductRoute.js';
import userRoute from './routes/UserRoute.js';




const port = process.env.PORT || 3000;
const app = express();
app.use(cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // or "http://localhost:5173" to be more restrictive
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
  
app.use(express.json());


db.connect(process.env.DB_URL).then(()=>{console.log('Mongodb is connected Atlas Server')}).catch(err=>console.error(' Server unable to connect database'))




app.use('/product', productRoute);



app.use('/user', userRoute);




app.listen(port, () => {
    console.log("Server is running and listening to requests...");
});










