import { createCasting, fetchCasting } from '../Controller/Casting.js';
import express from 'express';

const CastingRouter=express();
CastingRouter.post("/savecasting",createCasting);
CastingRouter.get("/fetchcasting",fetchCasting);
export default CastingRouter;