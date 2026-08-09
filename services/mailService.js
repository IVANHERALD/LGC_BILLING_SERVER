import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
console.log("EMAIL_USER =", process.env.EMAIL_USER);
console.log("EMAIL_PASS =", process.env.EMAIL_PASS ? "Loaded" : "Missing");

export const sendEmail = async ({
    to,
    invoiceNo,
    customerName,
    pdfBuffer,
  }) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: `Invoice -${invoiceNo} `,
        html:`
        <p>HI ${customerName},</p>
        <p>Please find attached Invoice <strong>${invoiceNo}</strong> for your reference.</p>
        <p>Thank you for your business!</p>
        <p>Regards,</p>
        <strong>Lakshmi Grade Casting</strong>`,
        attachments: [
            {
                filename: `${invoiceNo}.pdf`,
                content: pdfBuffer,
                contentType: 'application/pdf',
            },
        ],
    };
    return await transporter.sendMail(mailOptions);

};
