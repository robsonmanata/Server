import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import dotenv from "dotenv";


import userRouter from './routes/user.js';
// import commentRouter from './routes/comment.js'


const app = express();

app.use(express.json({limit:"30mb"}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/posts',postRoutes);
app.use("/user", userRouter);
// app.use("/comment", commentRouter);
const CONNECTION_URL = "mongodb+srv://admin-robson:test123@cluster0.eo1nu.mongodb.net/myJournal?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
.catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify',false);
