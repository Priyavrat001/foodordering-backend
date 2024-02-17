import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
export const connectToMongo = async () => {
    const uri = process.env.MONGO_URL;
    if (!uri) {
        throw new Error("MongoDB connection URL is not provided in the environment variables.");
    }
    try {
        await mongoose.connect(uri);
        console.log("MongoDB is connected successfully ");
    }
    catch (error) {
        console.error(error);
    }
};
