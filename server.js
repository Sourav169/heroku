const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

require('dotenv').config()
const path=require('path')

const app=express()

app.use(cors())
app.use(express.json())




if(process.env.NODE_ENV==="production"){
    app.use(express.static('client/build'));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"./client","build","index.html"))
    });
   

}
const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})