import { createCustomer, deleteCustomer, fetchCustomers } from '../Controller/Customer.js';
import express from 'express';

const CustomerRouter=express();
CustomerRouter.post("/savecustomer",createCustomer);
CustomerRouter.get("/fetchcustomer",fetchCustomers);
CustomerRouter.delete("/deletecustomer/:consignee_name",deleteCustomer);
export default CustomerRouter;