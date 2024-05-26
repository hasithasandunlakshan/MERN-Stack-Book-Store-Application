import express from "express";
import { PORT,mongodburl } from "./config.js";
import mongoose from "mongoose";
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
app.post('/books',async  (req,res)=>{
    try {
        if (
          !request.body.title ||
          !request.body.author ||
          !request.body.publishYear
        ) {
          return response.status(400).send({
            message: 'Send all required fields: title, author, publishYear',
          });
        }
        const newBook = {
          title: request.body.title,
          author: request.body.author,
          publishYear: request.body.publishYear,
        };
    
        const book = await Book.create(newBook);
    
        return response.status(201).send(book);
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
});


