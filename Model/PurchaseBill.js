import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PurchaseBillSchema = new Schema({
  vendor_name: {
    type: String,
    required: true,
  },
  purchase_date: {
    type: String,
    required: true,
  },
  invoice_no: {
    type: String,
    required: true,
    unique: true,
  },
  items: [
    {
      si_no: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      rate: {
        type: Number,
        required: true,
      },
      tax: {
        type: Number, // In percentage (e.g. 18 for 18%)
        required: true,
      },
      amount: {
        type: Number, // Final amount for this item (rate * qty + tax)
        required: true,
      },
    },
  ],
  subtotal: {
    type: Number,
    required: true,
  },
  total_tax: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  payment_terms: {
    type: String, // e.g. "30", "60", "paid"
    enum: ["30", "60", "paid"],
    required: true,
  },
  purchase_due_date: {
    type: String,
    required: true,
  },

  purchase_note: {
    type: String,
  },
});

export default mongoose.model("PurchaseBill", PurchaseBillSchema);
