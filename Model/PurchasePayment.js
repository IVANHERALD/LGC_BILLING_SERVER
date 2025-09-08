import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PurchasePaymentSchema = new Schema({
  payment_id: {
    type: String,
    required: true,
    unique: true,
  },
  invoice_id: {
    type: String,
    required: true,
    ref: "PurchaseBill",
  },
   vendor_id: {
    type: String,
    required: true,
    ref: "Vendor",
  },
  payments: [
    {
      date: { type: String, required: true }, // Format: dd/mm/yyyy
      method: {
        type: String,
        enum: ["Bank Transfer", "Cash", "Check", "UPI"],
        required: true,
      },
      reference_no: { type: String, required: true },
      amount_paid: { type: Number, required: true },
      payment_note: { type: String }
    }
  ]
}, { timestamps: true });

export default mongoose.model("PurchasePayment", PurchasePaymentSchema);
