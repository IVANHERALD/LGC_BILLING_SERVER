import { createBill, fetchAndGenerateBillNumber, fetchAndGenerateInvoiceNumber } from '../Controller/Bill.js';
import express from 'express';

const billRouter=express();
billRouter.post("/savebill",createBill);
billRouter.get("/generate-invoice-number",fetchAndGenerateInvoiceNumber)
billRouter.get("/billnumber",fetchAndGenerateBillNumber);
export default billRouter;