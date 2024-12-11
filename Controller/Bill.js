import BillDetails from "../Model/Bill.js";

export const createBill = async (req, res, next) => {
    try {
        const { invoice_no, invoice_date, state, state_code, transport_name, vehicle_number, date_of_supply, pono_date, eway_bill_no, receiver_name, receiver_address, receiver_gstin, receiver_state, receiver_state_code, consignee_name, consignee_address, consignee_gstin, consignee_state, consignee_state_code ,items,total_before_tax,cgst,sgst,igst,roundoff,grand_total,grand_total_words} = req.body;
        
      
        const existingBill = await BillDetails.findOne({ invoice_no });
        if (!existingBill) {
            const BillItem = new BillDetails({
                invoice_no, invoice_date, state, state_code, transport_name, vehicle_number, date_of_supply, pono_date, eway_bill_no, receiver_name, receiver_address, receiver_gstin, receiver_state, receiver_state_code, consignee_name, consignee_address, consignee_gstin, consignee_state, consignee_state_code,items,total_before_tax,cgst,sgst,igst,roundoff,grand_total,grand_total_words
            });
            const savedBilltem = await BillItem.save();
            console.log(savedBilltem);
            if (!savedBilltem) {
                return res.status(500).json({ message: 'Unexpected error occurred' });
            }
            return res.status(201).json({ BillItem: savedBilltem });
        }
        
    }
    catch (error) {
        return next(error);

    }
};


export const fetchAndGenerateInvoiceNumber = async (req, res, next) => {
    try {
        // Fetch the most recent invoice
        const latestBill = await BillDetails.findOne()
            .sort({ _id: -1 }) // Sort by newest document
            .exec();

        // Get the current year (last two digits)
        const currentYear = new Date().getFullYear().toString().slice(-2);
        

        let newBillNo = "0001"; // Default for the first bill
        if (latestBill) {
            const latestInvoiceNo = latestBill.invoice_no; // e.g., "LGC240001"
            const latestYear = latestInvoiceNo.slice(3, 5); // e.g., "24"
            const latestSerialNo = parseInt(latestInvoiceNo.slice(5)); // e.g., "0001"

            // If the year matches, increment the bill number
            if (latestYear === currentYear) {
                newBillNo = (latestSerialNo + 1).toString().padStart(4, "0"); // e.g., "0002"
            }
        }

        // Generate the new invoice number
        const newInvoiceNo = `LGC${currentYear}${newBillNo}`;

        // Return the invoice number to the frontend
        return res.status(200).json({ invoice_no: newInvoiceNo });
    } catch (error) {
        return next(error);
    }
};