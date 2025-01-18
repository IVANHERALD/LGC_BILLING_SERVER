import { createBill, fetchAndGenerateBillNumber, fetchAndGenerateInvoiceNumber, fetchBill, updateBill } from '../Controller/Bill.js';
import express from 'express';

const billRouter=express();
billRouter.post("/savebill",createBill);
billRouter.get("/fetchbill",fetchBill);
billRouter.get("/generate-invoice-number",fetchAndGenerateInvoiceNumber)
billRouter.get("/billnumber",fetchAndGenerateBillNumber);
billRouter.put("/updatebill/:invoice_no",updateBill);
export default billRouter;