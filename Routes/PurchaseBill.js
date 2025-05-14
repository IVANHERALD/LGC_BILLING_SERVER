import express from 'express';
import { createPurchaseBill } from '../Controller/PurchaseBill';

const PurchaseBillRouter=express();
PurchaseBillRouter.post("/savepurchasebill",createPurchaseBill);

export default PurchaseBillRouter;