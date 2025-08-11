import {v4 as uuidv4} from 'uuid';
import PurchasePayment from '../Model/PurchasePayment.js';
import PurchaseBill from '../Model/PurchaseBill.js';

export const recordVendorPayment = async (req, res) => {
  const { invoice_id, payment } = req.body;

  if (!invoice_id  || !payment) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    let paymentDoc = await PurchasePayment.findOne({ invoice_id });

    if (!paymentDoc) {
      const newPayment = new PurchasePayment({
        payment_id: `PAY${uuidv4()}`,
        invoice_id,
        //vendor_id,
        payments: [payment],
      });
       await newPayment.save();
      return res.status(201).json({ message: 'Payment record created.', data: newPayment });
    } else {
      paymentDoc.payments.push(payment);
      await paymentDoc.save();
      return res.status(200).json({ message: 'Payment added to existing record.', data: paymentDoc });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error.' });
  }
};
// In your controller
export const getAllInvoicesWithPayments = async (req, res) => {
  try {
    const invoices = await PurchaseBill.find(); // or whatever your invoice model is

    const payments = await PurchasePayment.aggregate([
      {
        $group: {
          _id: "$invoice_id",
          totalPaid: { $sum: "$amount_paid" }
        }
      }
    ]);
    console.log("Payments:", payments);

    // Create a map for quick lookup table
    const paymentMap = {};
    payments.forEach(p => {
      paymentMap[p._id] = p.totalPaid;
    });

    const result = invoices.map(invoice => {
      const totalPaid = paymentMap[invoice.amount_paid] || 0;
      const balance = invoice.total - totalPaid;

      return {
        ...invoice._doc,
        totalPaid,
        balance
      };
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getVendorPayments = async (req, res) => {
  const { vendor_id } = req.params;
  try {
    const records = await PurchasePayment.find({ vendor_id });
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch vendor payments.' });
  }
};