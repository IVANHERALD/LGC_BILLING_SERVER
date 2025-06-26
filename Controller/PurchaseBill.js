import PurchaseBill from "../Model/PurchaseBill.js";
export const createPurchaseBill = async (req, res, next) => {
    try {
        const {vendor_name,purchase_date,invoice_no,items,subtotal,total_tax,total,payment_terms,purchase_due_date,purchase_note } = req.body;
        
      
        const existingPurchaseBill = await PurchaseBill.findOne({ invoice_no });
        
        if (!existingPurchaseBill) {
            const PurchaseBillItem = new PurchaseBill({
                vendor_name,purchase_date,invoice_no,items,subtotal,total_tax,total,payment_terms,purchase_due_date,purchase_note
            });
            const savedPurchaseBilltem = await PurchaseBillItem.save();
            console.log(savedPurchaseBilltem);
            if (!savedPurchaseBilltem) {
                return res.status(500).json({ message: 'Unexpected error occurred' });
            }
            return res.status(201).json({ PurchaseBillItem: savedPurchaseBilltem });
        }
        else{
          return res.status(400).json({ message: 'Bill with this invoice number already exists' });
        }
        
    }
    catch (error) {
        return next(error);

    }
};
export const fetchPurchaseBill = async (req, res, next) => {
    try {
      const PurchaseBill = await PurchaseBill.find();
      res.status(200).json({ PurchaseBill  });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }

}