import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CastingSchema = new Schema({
    casting_name:{
        type:String,
        required:true

    },
    casting_weight:{
        type:String,
        required:true
    }

})

export default mongoose.model("CastingDetails",CastingSchema);