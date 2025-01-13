import { createBill, fetchAndGenerateBillNumber, fetchAndGenerateInvoiceNumber, fetchBill } from '../Controller/Bill.js';
import express from 'express';

const billRouter=express();
billRouter.post("/savebill",createBill);
billRouter.get("/fetchbill",fetchBill);
billRouter.get("/generate-invoice-number",fetchAndGenerateInvoiceNumber)
billRouter.get("/billnumber",fetchAndGenerateBillNumber);
export default billRouter;