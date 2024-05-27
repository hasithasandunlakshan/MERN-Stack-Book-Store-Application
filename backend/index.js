import express from "express";
import { PORT,mongodburl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./modules/bookModel.js";
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
//get all books from data base
app.get('/books',async (req,res)=>{
    try {
        const books=await Book.find({});
        return res.status(200).json({
            count:books.length,
            data:books
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
        
    }





})
app.post('/books',async  (request,response)=>{
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


