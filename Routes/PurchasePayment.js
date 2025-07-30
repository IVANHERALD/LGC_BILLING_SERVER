import express from "express";
import { recordVendorPayment,getTotalPaid,getVendorPayments } from "../Controller/PurchasePayment.js";

const PurchasepaymentRouter = express.Router();

PurchasepaymentRouter.post("/record-purchasepayment", recordVendorPayment);
PurchasepaymentRouter.get("/totalpaid/:invoice_id", getTotalPaid);
PurchasepaymentRouter.get("/vendor/:vendor_id", getVendorPayments);



export default PurchasepaymentRouter;
