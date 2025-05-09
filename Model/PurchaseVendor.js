import mongoose from "mongoose";

const Schema = mongoose.Schema;
const PurchaseVendorSchema=new Schema({
    vendor_name:{
        type:String,
        required:true,
    },
    vendor_gstin:{
        type:String,
        required:true,
    },
    vendor_contact:{
        type:String,
        required:true,
    },
    vendor_email:{
        type:String,
        required:true,

    },
    vendor_address:{
        type:String,
        required:true,

    },
    vendor_city:{
        type:String,
        required:true,

    },
    vendor_state:{
        type:String,
        required:true,
        
    },
    vendor_pin_code:{
        type:Number,
        required:true,

    },
    vendor_account_holder_name:{
        type:String,
        required:true,

    },
    vendor_account_number:{
        type:Number,
        required:true,
    },
    vendor_bank_name:{
        type:String,
        required:true,
    },
    vendor_ifsc_code:{
        type:String,
        required:true,
    },
    vendor_branch_name:{
        type:String,
        required:true,
    }




});
export default mongoose.model("PurchaseVendorDetails",PurchaseVendorSchema);