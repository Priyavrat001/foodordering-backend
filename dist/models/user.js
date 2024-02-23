import mongoose from "mongoose";
const schema = new mongoose.Schema({
    auth0Id: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    }
});
export const User = mongoose.model("User", schema);
