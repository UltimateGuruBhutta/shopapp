const express = require('express')
const router = express.Router();


router.get('/',(req,res)=>{
res.send("home");
})

router.get('/add',(req,res)=>{
    res.send('Home/add')
})


module.exports=router;
