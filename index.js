import express from "express";

const app = express();
const PORT = 3000;

app.get("/",async(req,res)=>{
    res.send("Yo I am Alive");
})

app.listen(PORT,()=>{
    console.log(`I am running at ${PORT}`);
})