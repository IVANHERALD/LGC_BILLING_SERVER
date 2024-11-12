import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
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

export default mongoose.model("CustomerDetails", CustomerSchema);