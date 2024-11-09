import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BillSchema = new Schema({

    invoice_no: {
        type: String,
        unique: true,
        required: true
    },
    invoice_date: {
        type: String,
        unique: true,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    state_code: {
        type: Number,
        required: true
    },
    transport_name: {
        type: String,
    },
    vehicle_number:{
        type:String,
        required:true
    },
    date_of_supply:{
        type:String
    },
    place_of_supply:{
        type:String
    },
    pono_date:{
        type:String,
    },
    eway_bill_no:{
        type:String,
        required:true
    },
    receiver_name:{
        type:String,
        required:true
    },
    receiver_address:{
        type:String,
        required:true
    },
    receiver_gstin:{
        type:String,
        required:true
    },
    receiver_state:{
        type:String,
        required:true,
    },
    receiver_state_code:{
        type:String,
        required:true
    },
    consignee_name:{
        type:String,

    },
    consignee_address:{
        type:String
    },
    consignee_gstin:{
        type:String,
    },
    consignee_state:{
        type:String,
    },
    consignee_state_code:{
        type:String

    }
})

export default mongoose.model("BillDetails", BillSchema);