import BillDetails from "../Model/Bill.js";

export const createBill = async (req, res, next) => {
    try {
        const { invoice_no, invoice_date, state, state_code, transport_name, vehicle_number, date_of_supply, place_of_supply, pono_date, eway_bill_no, receiver_name, receiver_address, receiver_gstin, receiver_state, receiver_state_code, consignee_name, consignee_address, consignee_gstin, consignee_state, consignee_state_code } = req.body;
        if (invoice_no, invoice_date, state, state_code, vehicle_number, eway_bill_no, receiver_name, receiver_address, receiver_gstin, receiver_state, receiver_state_code, consignee_name, consignee_address, consignee_gstin, consignee_state, consignee_state_code) {
            return res.status(422).json({ message: 'Invalid Inputs' });
        }
        const existingBill = await BillDetails.findOne({ invoice_no });
        if (!existingBill) {
            const BillItem = new BillDetails({
                invoice_no, invoice_date, state, state_code, transport_name, vehicle_number, date_of_supply, place_of_supply, pono_date, eway_bill_no, receiver_name, receiver_address, receiver_gstin, receiver_state, receiver_state_code, consignee_name, consignee_address, consignee_gstin, consignee_state, consignee_state_code
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