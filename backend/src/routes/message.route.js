import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
    getMessages,
    getUsersForSidebar,
    sendMessage
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
//user.routes.js
// import express from "express";
// import User from "../models/user.model.js"; // Make sure this path is correct

// const router = express.Router();

// // GET /api/users
// router.get("/", async (req, res) => {
//     try {
//         const users = await User.find({}, "-password"); // exclude sensitive info
//         res.status(200).json(users);
//     } catch (error) {
//         console.error("Error fetching users:", error);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// export default router;
