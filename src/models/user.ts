import mongoose, { Schema } from "mongoose";

interface IUser extends Document {
    name?:string;
    auth0Id:string;
    addressLine1?:string;
    city?:string;
    country?:string
}

const schema = new mongoose.Schema({
    auth0Id:{
        type:String,
        required:true
    },
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    addressLine1:{
        type:String,
    },
    city:{
        type:String,
    },
    country:{
        type:String,
    }
})

export const User = mongoose.model("User", schema)