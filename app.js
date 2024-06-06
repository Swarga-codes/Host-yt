const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config();

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to CodeCruise Channel. Please Subscribe!</h1>')
})

app.get("/secret",(req,res)=>{
    res.send(`Secret Message: ${process.env.SECRET_MESSAGE}`)
})

app.listen(3000,()=>{
    console.log("Server is up and running at port 3000");
})