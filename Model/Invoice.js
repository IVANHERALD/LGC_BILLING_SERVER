import mongoose from "mongoose";

const Schema = mongoose.Schema;
const InvoiceSchema=new Schema({
    si_no:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    hsncode:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,

    },

    weight:{
        type:Number,
        required:true,

    },
    rate:{
        type:Number,
        required:true,

    },
    value:{
        type:Number,
        required:true,
        
    },
    total_before_tax:{
        type:Number,
        required:true,

    },
    cgst:{
        type:Number,
        required:true,

    },
    sgst:{
        type:Number,
        required:true,
    },
    igst:{
        type:Number,
        required:true,
    },
    grand_total:{
        type:Number,
        required:true,
    },
    grand_total_words:{
        type:String,
        required:true,
    }




});
export default mongoose.model("InvoiceDetails",InvoiceSchema);