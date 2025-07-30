import express from "express";
import { recordVendorPayment } from "../Controller/PurchasePayment.js";

const PurchasepaymentRouter = express.Router();

PurchasepaymentRouter.post("/record-purchasepayment", recordVendorPayment);



export default PurchasepaymentRouter;
