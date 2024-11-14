import { createBill, fetchAndGenerateInvoiceNumber } from '../Controller/Bill.js';
import express from 'express';

const billRouter=express();
billRouter.post("/savebill",createBill);
billRouter.get("/generate-invoice-number",fetchAndGenerateInvoiceNumber)
export default billRouter;