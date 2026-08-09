import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  family: 4, // Force IPv4
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,

});
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP VERIFY ERROR:", error);
  } else {
    console.log("SMTP SERVER READY");
  }
});
console.log("EMAIL_USER =", process.env.EMAIL_USER);
console.log("EMAIL_PASS =", process.env.EMAIL_PASS ? "Loaded" : "Missing");

export const sendEmail = async ({
    to,
    invoiceNo,
    customerName,
    pdfBuffer,
  }) => {
    console.log("Preparing mail...");
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
    console.log("Sending mail...");

  const result = await transporter.sendMail(mailOptions);

  console.log("Mail response:", result);

  return result;

};
