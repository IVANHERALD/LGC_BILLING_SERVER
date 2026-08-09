import CustomerDetails from "../Model/Customer.js";
import {generatePDF} from "../services/pdfService.js";
import {sendEmail} from "../services/mailService.js"

export const emailInvoice=async(req,res)=>{
    try{
        const{bill}=req.body;
        if(!bill){
            return res.status(400).json({
                sucess:false,
                message:"Invoice data is required",
            })
        }
        if(!bill.invoice_no){
            return res.status(400).json({
                sucess:false,
                message:"Invoice number is required",
            });
        }
        const customer=await CustomerDetails.findOne({
            consignee_name:bill.receiver_name});

            if(!customer){
                return res.status(404).json({
                    success:false,
                    message:`Customer '${bill.receiver_name}'not found`,
                });
            }
            if(!customer.consignee_email){
                return res.staus(400).json({
                    success:false,
                    message:`Customer '${customer.receiver_name}' does not have an email address`,
                });
            }
          const pdfBuffer=await generatePDF(bill);
          console.log("========== EMAIL DATA ==========");
console.log("Customer Email:", customer.consignee_email);
console.log("Invoice No:", bill.invoice_no);
console.log("Customer Name:", customer.consignee_name);
console.log("================================");
          const mailResult=await sendEmail({
            to:customer.consignee_email,
            invoiceNo:bill.invoice_no,
            customerName:customer.consignee_name,
            pdfBuffer,});

            return res.status(200).json({
                suceess:true,
                message:
                `Invoice ${bill.invoice_no} emailed suceesfully to ${customer.consignee_email}`,
                messageId:mailResult.messageId,
            })

    }
    catch(error){
        console.error("Error in emailInvoice:",error);
        return res.status(500).json({
            success:false,
            message:"Unable to send invoice email",
            
        });
    }
};