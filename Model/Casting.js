import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CastingSchema = new Schema({
    casting_name:{
        type:String,
        

    },
    casting_weight:{
        type:Number,
        
    },
    casting_hsn:{
        type:String
    },
    pieces_per_box:{
        type:Number,
        required:true,
        default:1
    }

})

export default mongoose.model("CastingDetails",CastingSchema);