import { createCustomer, deleteCustomer, fetchCustomers, updateCustomer } from '../Controller/Customer.js';
import express from 'express';

const CustomerRouter=express();
CustomerRouter.post("/savecustomer",createCustomer);
CustomerRouter.get("/fetchcustomer",fetchCustomers);
CustomerRouter.put("/updatecustomer/:consignee_name",updateCustomer);
CustomerRouter.delete("/deletecustomer/:consignee_name",deleteCustomer);
export default CustomerRouter;