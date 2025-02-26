import { createCasting, deleteCasting, fetchCasting, updateCasting } from '../Controller/Casting.js';
import express from 'express';

const CastingRouter=express();
CastingRouter.post("/savecasting",createCasting);
CastingRouter.get("/fetchcasting",fetchCasting);
CastingRouter.put("/updatecasting/:casting_name",updateCasting);
CastingRouter.delete("/deletecasting/:casting_name",deleteCasting);
export default CastingRouter;