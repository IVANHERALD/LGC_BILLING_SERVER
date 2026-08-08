import express from "express";
import{
    emailInvoice
} from "../Controller/Email.js";

const EmailRouter=express.Router();

EmailRouter.post("/send-invoice-email",emailInvoice);

export default EmailRouter;

