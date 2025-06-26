import express from 'express';
import { createPurchaseBill,fetchPurchaseBill } from '../Controller/PurchaseBill.js';

const PurchaseBillRouter=express();
PurchaseBillRouter.post("/savepurchasebill",createPurchaseBill);
PurchaseBillRouter.get("/fetchPurchasebill",fetchPurchaseBill);
export default PurchaseBillRouter;