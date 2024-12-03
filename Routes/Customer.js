import { createCustomer, fetchCustomers } from '../Controller/Customer.js';
import express from 'express';

const CustomerRouter=express();
CustomerRouter.post("/savecustomer",createCustomer);
CustomerRouter.get("/fetchcustomer",fetchCustomers);
export default CustomerRouter;