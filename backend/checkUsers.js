import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URL || "mongodb+srv://navinrochani07:WHat0707@cluster0.m3yagft.mongodb.net/?appName=Cluster0";

mongoose.connect(uri).then(async () => {
    const db = mongoose.connection.useDb("test"); // or default db
    const users = await mongoose.connection.db.collection('users').find({}).toArray();
    console.log(users.map(u => ({ id: u._id, name: u.fullName, email: u.email })));
    process.exit(0);
}).catch(console.error);
