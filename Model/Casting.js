import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CastingSchema = new Schema({
    casting_name:{
        type:String,
        

    },
    casting_weight:{
        type:String,
        
    },
    casting_hsn:{
        type:String
    }

})

export default mongoose.model("CastingDetails",CastingSchema);