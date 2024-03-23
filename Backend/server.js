const express = require('express')
const port = 3000;
const app=express();


app.get('/',(req,res)=>{
    res.send("hinadfaegafhajf jadfkjoi knsafoihadfaafadfafweoia idfioeh knhieg")
})


app.listen(port,()=>{
    console.log("Server is running and listenin request...")
})