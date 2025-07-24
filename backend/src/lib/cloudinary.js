// // // import { v2 as cloudinary } from "cloudinary";

// // // import { config } from "dotenv";

// // // config();

// // // cloudinary.config({
// // //     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// // //     api_key: process.env.CLOUDINARY_API_KEY,
// // //     api_secret: process.env.CLOUDINARY_API_SECRET,

// // // });

// // // export default cloudinary;

// // import { v2 as cloudinary } from "cloudinary";

// // import { config } from "dotenv";

// // config();

// // cloudinary.config({
// //     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// //     api_key: process.env.CLOUDINARY_API_KEY,
// //     api_secret: process.env.CLOUDINARY_API_SECRET,
// // });

// // export default cloudinary;
// import mongoose from "mongoose";

// export const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGODB_URI);
//         console.log(`MongoDB connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.log("MongoDB connection error:", error);
//     }
// };
import { v2 as cloudinary } from "cloudinary";

import { config } from "dotenv";

config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
