import { createCasting } from '../Controller/Casting.js';
import express from 'express';

const CastingRouter=express();
CastingRouter.post("/savecasting",createCasting);
export default CastingRouter;