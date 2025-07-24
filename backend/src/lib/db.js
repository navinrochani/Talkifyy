/*import mongoose from "mongoose";



export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected : ${conn.connection.host}`);

    } catch (error) {
        console.log("MongoDB connection error:", error);

    }
};*/

import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URL; // ✅ Make sure this matches your .env key

        if (!uri) {
            throw new Error("MONGODB_URL is not defined in .env file");
        }

        await mongoose.connect(uri, {
            //  useNewUrlParser: true,
            //  useUnifiedTopology: true,
        });

        console.log("✅ MongoDB connected");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
    }
};
