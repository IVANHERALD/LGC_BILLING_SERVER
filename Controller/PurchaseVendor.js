import PurchaseVendorDetails from '../Model/PurchaseVendor.js'

export const createVendor = async (req, res, next) => {
    try {
        const {vendor_name, vendor_gstin,vendor_contact,vendor_email,vendor_address,vendor_city,vendor_state,vendor_pin_code,  vendor_account_holder_name,vendor_account_number,vendor_bank_name,vendor_ifsc_code,vendor_branch_name } = req.body;
        if (!vendor_name || !vendor_gstin || !vendor_contact|| !vendor_email||!vendor_address||!vendor_city||!vendor_state||!vendor_pin_code||  !vendor_account_holder_name||!vendor_account_number||!vendor_bank_name||!vendor_ifsc_code||!vendor_branch_name) {
            return res.status(422).json({ message: 'Invalid Inputs' });
        }
        const existingVendor = await PurchaseVendorDetails.findOne({ vendor_name });
        if (!existingVendor) {
            const VendorItem = new PurchaseVendorDetails({
                vendor_name, vendor_gstin,vendor_contact,vendor_email,vendor_address,vendor_city,vendor_state,vendor_pin_code,  vendor_account_holder_name,vendor_account_number,vendor_bank_name,vendor_ifsc_code,vendor_branch_name      });
            const savedVendoritem = await VendorItem.save();
            console.log(savedVendoritem);
            if (!savedVendoritem) {
                return res.status(500).json({ message: 'Unexpected error occurred' });
            }
            return res.status(201).json({ VendorItem: savedVendoritem });
        }

    }
    catch (error) {
        return next(error);

    }
};
export const fetchVendors = async (req, res, next) => {
    
    try {
      const vendors = await PurchaseVendorDetails.find();
      res.status(200).json({ vendors });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };