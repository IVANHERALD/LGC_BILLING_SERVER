import express from 'express';
import { createVendor, fetchVendors } from '../Controller/PurchaseVendor.js';

const VendorRouter=express();
VendorRouter.post("/savevendor",createVendor);
VendorRouter.get("/fetchvendor",fetchVendors)
export default VendorRouter;