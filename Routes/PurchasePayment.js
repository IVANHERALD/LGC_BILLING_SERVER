import express from "express";
import { recordVendorPayment,getTotalPaid } from "../Controller/PurchasePayment.js";

const PurchasepaymentRouter = express.Router();

PurchasepaymentRouter.post("/record-purchasepayment", recordVendorPayment);
PurchasepaymentRouter.get("/totalpaid/:invoice_id", getTotalPaid);



export default PurchasepaymentRouter;
