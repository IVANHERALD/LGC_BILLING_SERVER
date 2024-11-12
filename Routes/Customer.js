import { createCustomer } from '../Controller/Customer.js';
import express from 'express';

const CustomerRouter=express();
CustomerRouter.post("/savecustomer",createCustomer);
export default CustomerRouter;