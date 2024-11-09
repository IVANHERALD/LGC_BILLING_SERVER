import billRouter from './Routes/Bill.js';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(express.json());
app.use("/lgc",billRouter)





mongoose.connect(process.env.MONGO_URI) 

  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Connected to Database And Server is running");
    });
  })
  .catch(e => console.log(e));