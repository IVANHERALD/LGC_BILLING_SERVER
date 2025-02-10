import { createCasting, deleteCasting, fetchCasting } from '../Controller/Casting.js';
import express from 'express';

const CastingRouter=express();
CastingRouter.post("/savecasting",createCasting);
CastingRouter.get("/fetchcasting",fetchCasting);
CastingRouter.delete("/deletecasting/:casting_name",deleteCasting);
export default CastingRouter;