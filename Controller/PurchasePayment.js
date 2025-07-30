import {v4 as uuidv4} from 'uuid';
import PurchasePayment from '../Model/PurchasePayment.js';

export const recordVendorPayment = async (req, res) => {
  const { invoice_id, vendor_id, payment } = req.body;

  if (!invoice_id || !vendor_id || !payment) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    let paymentDoc = await PurchasePayment.findOne({ invoice_id });

    if (!paymentDoc) {
      const newPayment = new PurchasePayment({
        payment_id: `PAY${uuidv4()}`,
        invoice_id,
        vendor_id,
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