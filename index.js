import CastingRouter from './Routes/Casting.js';
import CustomerRouter from './Routes/Customer.js';
import billRouter from './Routes/Bill.js';
import cors from 'cors'
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import VendorRouter from './Routes/PurchaseVendor.js';
import PurchaseBillRouter from './Routes/PurchaseBill.js';

;

dotenv.config();

const app = express();
const allowedOrigins = process.env.CLIENT_URL.split(',');


app.use(express.json());
app.use(cors({
  origin: (origin, callback) => {
    // Check if the incoming origin is in the allowedOrigins array or if it's undefined (for server-to-server communication).
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true // Allow credentials (if needed)
}));
app.use("/lgc",billRouter)
app.use("/lgc",CustomerRouter)
app.use("/lgc",CastingRouter)
app.use("/lgc",VendorRouter)
app.use("/lgc",PurchaseBillRouter)






mongoose.connect(process.env.MONGO_URI) 

  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Connected to Database And Server is running");
    });
  })
  .catch(e => console.log(e));