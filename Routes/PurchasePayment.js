import express from "express";
import { recordVendorPayment,getVendorPayments, getAllInvoicesWithPayments } from "../Controller/PurchasePayment.js";

const PurchasepaymentRouter = express.Router();

PurchasepaymentRouter.post("/record-purchasepayment", recordVendorPayment);
PurchasepaymentRouter.get("/totalpaid", getAllInvoicesWithPayments);
PurchasepaymentRouter.get("/vendor/:vendor_id", getVendorPayments);



export default PurchasepaymentRouter;
