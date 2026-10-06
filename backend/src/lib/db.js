import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URL;

        if (!uri) {
            throw new Error("MONGODB_URL is not defined");
        }

        if (mongoose.connection.readyState === 1) {
            console.log("✅ MongoDB already connected");
            return;
        }

        await mongoose.connect(uri);

        console.log("✅ MongoDB connected");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        throw error;
    }
};