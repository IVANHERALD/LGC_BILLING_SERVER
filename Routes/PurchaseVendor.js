import express from 'express';
import { createVendor } from '../Controller/PurchaseVendor';

const VendorRouter=express();
VendorRouter.post("/savevendor",createVendor);
export default VendorRouter;