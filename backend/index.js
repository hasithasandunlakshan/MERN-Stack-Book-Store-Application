import express from "express";
import { PORT,mongodburl } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors'
import BookRoutes from "./Routes/BookRoute.js"
const app=express();
app.use(express.json());
mongoose
.connect(mongodburl)
.then(()=>{console.log("App is connected to database")
app.listen(PORT,()=>{
    console.log(`app is listening to port:${PORT}`);
});
})


.catch((error)=>{
    console.log(error);
})


app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send("welcome to mern statck")

});
app.use(cors());
app.use("/books",BookRoutes)
//get all books from data base
