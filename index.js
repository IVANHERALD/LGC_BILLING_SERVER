import CastingRouter from './Routes/Casting.js';
import CustomerRouter from './Routes/Customer.js';
import billRouter from './Routes/Bill.js';
import cors from 'cors'
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

;

dotenv.config();

const app = express();


app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true // Allow credentials (if needed)
}));
app.use("/lgc",billRouter)
app.use("/lgc",CustomerRouter)
app.use("/lgc",CastingRouter)






mongoose.connect(process.env.MONGO_URI) 

  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Connected to Database And Server is running");
    });
  })
  .catch(e => console.log(e));