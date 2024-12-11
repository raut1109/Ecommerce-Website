import mongoose from "mongoose";
import user from "./userModel.js";

const dateSchema = new mongoose.Schema({
   
    work: {
        type: String,
        required: true
    }, 
    charge : {
        type: Number,
        required : true
    },
     paid : {
        type: Number,
        required : true
    },
     remaining : {
        type: Number,
        required : true
    },
    User: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user', 
        required: true
    }
});

export default mongoose.model("datas", dateSchema); 

