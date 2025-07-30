import express from "express";
import { recordVendorPayment } from "../Controller/PurchasePayment";

const PurchasepaymentRouter = express.Router();

PurchasepaymentRouter.post("/record-purchasepayment", recordVendorPayment);



export default PurchasepaymentRouter;
