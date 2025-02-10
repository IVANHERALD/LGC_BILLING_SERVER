import CustomerDetails from "../Model/Customer.js";

export const createCustomer = async (req, res, next) => {
    try {
        const {consignee_name,consignee_address,consignee_gstin,consignee_state,consignee_state_code } = req.body;
        if (!consignee_name||!consignee_address||!consignee_state||!consignee_state_code) {
            return res.status(422).json({ message: 'Invalid Inputs' });
        }
        const existingCustomer = await CustomerDetails.findOne({ consignee_name });
        if (!existingCustomer) {
            const CustomerItem = new CustomerDetails({
                consignee_name,consignee_address,consignee_gstin,consignee_state,consignee_state_code      });
            const savedCustomeritem = await CustomerItem.save();
            console.log(savedCustomeritem);
            if (!savedCustomeritem) {
                return res.status(500).json({ message: 'Unexpected error occurred' });
            }
            return res.status(201).json({ CustomerItem: savedCustomeritem });
        }

    }
    catch (error) {
        return next(error);

    }
};
export const fetchCustomers = async (req, res, next) => {
    try {
      const customers = await CustomerDetails.find();
      res.status(200).json({ customers });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  export const deleteCustomer = async (req, res, next) => {
    const customer = req.params.consignee_name; // Extract invoice_no from query parameters
    try {
      if (!customer) {
        return res.status(400).json({ message: ' Consignee name is required for deleting the Customer.' });
      }
  
      // Find and delete the bill
      const deletedConsignee = await CustomerDetails.findOneAndDelete({ consignee_name: customer });
  
      if (!deletedConsignee) {
        return res.status(404).json({ message: 'Consignee not found.' });
      }
  
      return res.status(200).json({ message: 'Consignee deleted successfully.', deletedConsignee });
    } catch (error) {
      console.error('Error deleting Consignee:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  };
