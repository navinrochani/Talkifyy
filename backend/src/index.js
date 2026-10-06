


import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js"; // ✅ RE-ADD THIS
import { app, server } from "./lib/socket.js";

dotenv.config();
const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.use(
    cors({
        origin: ["http://localhost:5173", "https://talkifyy-exoi.vercel.app/"],
        credentials: true,
    })
);

// ✅ Mount routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes); // ✅ ADD THIS BACK

// ✅ Serve frontend if in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

// ✅ Start server
server.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT);
    connectDB();
});
