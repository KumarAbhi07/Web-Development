const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("welcome to shop home page")})

router.get('/products',(req,res)=>{
    res.send("welcome to shop products page")})

module.exports = router