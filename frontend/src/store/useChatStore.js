// // // import { create } from "zustand";
// // // import toast from "react-hot-toast";
// // // import { axiosInstance } from "../lib/axios";

// // // export const useChatStore = create((set, get) => ({
// // //     messages: [],
// // //     users: [],
// // //     selectedUser: null,
// // //     isUsersLoading: false,
// // //     isMessagesLoading: false,

// // //     getUsers: async () => {
// // //         set({ isUsersLoading: true });
// // //         try {
// // //             const res = await axiosInstance.get("/users");
// // //             set({ users: res.data });

// // //         } catch (error) {
// // //             toast.error(error.response.data.message);

// // //         } finally {
// // //             set({ isUsersLoading: false });
// // //         }
// // //     },

// // //     getMessages: async (userId) => {
// // //         set({ isMessagesLoading: true });
// // //         try {
// // //             const res = await axiosInstance.get(`/message/${userId}`);
// // //             set({ messages: res.data });
// // //         }
// // //         catch (error) {
// // //             toast.error(error.response.data.message);

// // //         }
// // //         finally {
// // //             set({ isMessagesLoading: false });
// // //         }
// // //     },

// // //     sendMessage: async (messageData) => {
// // //         const { selectedUser, message } = get()
// // //         try {
// // //             const res = await axiosInstance.post(`/message/send/${selectedUser._id}`, messageData);
// // //             set({ messages: [...messages, res.data] })
// // //         } catch (error) {
// // //             toast.error(error.response.data.message);

// // //         }
// // //     },

// // //     setSelectedUser: (selectedUser) => set({ selectedUser }),


// // // }))


// // // import { create } from "zustand";
// // // import toast from "react-hot-toast";
// // // import { axiosInstance } from "../lib/axios";
// // // import { useAuthStore } from "./useAuthStore";

// // // export const useChatStore = create((set, get) => ({
// // //     users: [],
// // //     messages: [],
// // //     selectedUser: null,
// // //     isUsersLoading: false,
// // //     isMessagesLoading: false,

// // //     // Fetch all users for sidebar
// // //     getUsers: async () => {
// // //         set({ isUsersLoading: true });
// // //         try {
// // //             const res = await axiosInstance.get("/message/user");
// // //             set({ users: res.data });
// // //         } catch (error) {
// // //             toast.error(error?.response?.data?.message || "Failed to load users.");
// // //         } finally {
// // //             set({ isUsersLoading: false });
// // //         }
// // //     },

// // //     // Fetch messages with a specific user
// // //     getMessages: async (userId) => {
// // //         set({ isMessagesLoading: true });
// // //         try {
// // //             const res = await axiosInstance.get(`/message/${userId}`);
// // //             set({ messages: res.data });
// // //         } catch (error) {
// // //             toast.error(error?.response?.data?.message || "Failed to load messages.");
// // //         } finally {
// // //             set({ isMessagesLoading: false });
// // //         }
// // //     },

// // //     // Send a message to the selected user
// // //     sendMessage: async (messageData) => {
// // //         const { selectedUser, messages } = get();

// // //         if (!selectedUser?._id) {
// // //             toast.error("No user selected.");
// // //             return;
// // //         }

// // //         try {
// // //             const res = await axiosInstance.post(`/message/send/${selectedUser._id}`, messageData);

// // //             if (res?.data) {
// // //                 set({ messages: [...messages, res.data] });
// // //             } else {
// // //                 toast.error("Unexpected server response.");
// // //             }
// // //         } catch (error) {
// // //             toast.error(error?.response?.data?.message || "Failed to send message.");
// // //         }
// // //     },

// // //     subscribeToMessages: () => {
// // //         const { selectedUser } = get()
// // //         if (!selectedUser) return;

// // //         const socket = useAuthStore.getState().socket;

// // //         socket.on("newMessage", (newMessage) => {
// // //             set({
// // //                 message: [...message, newMessage],
// // //             })
// // //         })
// // //     },

// // //     unsubscribeToMessages: () => {
// // //         const socket = useAuthStore.getState().socket;
// // //         socket.off("newMessage");
// // //     },
// // //     // Set the selected user for the chat
// // //     setSelectedUser: (selectedUser) => set({ selectedUser }),
// // // }));
// // import { create } from "zustand";
// // import toast from "react-hot-toast";
// // import { axiosInstance } from "../lib/axios";
// // import { useAuthStore } from "./useAuthStore";

// // export const useChatStore = create((set, get) => ({
// //     users: [],
// //     messages: [],
// //     selectedUser: null,
// //     isUsersLoading: false,
// //     isMessagesLoading: false,

// //     // Fetch all users except the current one
// //     getUsers: async () => {
// //         set({ isUsersLoading: true });
// //         try {
// //             const res = await axiosInstance.get("/message/user");
// //             set({ users: res.data });
// //         } catch (error) {
// //             toast.error(error?.response?.data?.message || "Failed to load users.");
// //         } finally {
// //             set({ isUsersLoading: false });
// //         }
// //     },

// //     // Fetch message history
// //     getMessages: async (userId) => {
// //         set({ isMessagesLoading: true });
// //         try {
// //             const res = await axiosInstance.get(`/message/${userId}`);
// //             set({ messages: res.data });
// //         } catch (error) {
// //             toast.error(error?.response?.data?.message || "Failed to load messages.");
// //         } finally {
// //             set({ isMessagesLoading: false });
// //         }
// //     },

// //     // Send a message
// //     sendMessage: async (messageData) => {
// //         const { selectedUser, messages } = get();

// //         if (!selectedUser?._id) {
// //             toast.error("No user selected.");
// //             return;
// //         }

// //         try {
// //             const res = await axiosInstance.post(`/message/send/${selectedUser._id}`, messageData);

// //             if (res?.data) {
// //                 set({ messages: [...messages, res.data] });
// //             } else {
// //                 toast.error("Unexpected server response.");
// //             }
// //         } catch (error) {
// //             toast.error(error?.response?.data?.message || "Failed to send message.");
// //         }
// //     },

// //     // Subscribe to real-time incoming messages
// //     subscribeToMessages: () => {
// //         const { selectedUser, messages } = get();
// //         const socket = useAuthStore.getState().socket;

// //         if (!socket || !selectedUser) return;

// //         socket.on("newMessage", (newMessage) => {
// //             // Only append if message is from or to selected user
// //             if (
// //                 newMessage.senderId === selectedUser._id ||
// //                 newMessage.receiverId === selectedUser._id
// //             ) {
// //                 set({ messages: [...get().messages, newMessage] });
// //             }
// //         });
// //     },

// //     unsubscribeToMessages: () => {
// //         const socket = useAuthStore.getState().socket;
// //         if (socket) {
// //             socket.off("newMessage");
// //         }
// //     },

// //     setSelectedUser: (selectedUser) => set({ selectedUser }),
// // }));

// import { generateToken } from "../lib/utils.js";
// import User from "../models/user.model.js";
// import bcrypt from "bcryptjs";
// import cloudinary from "../lib/cloudinary.js";

// export const signup = async (req, res) => {
//     const { fullName, email, password } = req.body;
//     try {
//         if (!fullName || !email || !password) {
//             return res.status(400).json({ message: "All fields are required" });
//         }

//         if (password.length < 6) {
//             return res.status(400).json({ message: "Password must be at least 6 characters" });
//         }

//         const user = await User.findOne({ email });

//         if (user) return res.status(400).json({ message: "Email already exists" });

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         const newUser = new User({
//             fullName,
//             email,
//             password: hashedPassword,
//         });

//         if (newUser) {
//             // generate jwt token here
//             generateToken(newUser._id, res);
//             await newUser.save();

//             res.status(201).json({
//                 _id: newUser._id,
//                 fullName: newUser.fullName,
//                 email: newUser.email,
//                 profilePic: newUser.profilePic,
//             });
//         } else {
//             res.status(400).json({ message: "Invalid user data" });
//         }
//     } catch (error) {
//         console.log("Error in signup controller", error.message);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// export const login = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(400).json({ message: "Invalid credentials" });
//         }

//         const isPasswordCorrect = await bcrypt.compare(password, user.password);
//         if (!isPasswordCorrect) {
//             return res.status(400).json({ message: "Invalid credentials" });
//         }

//         generateToken(user._id, res);

//         res.status(200).json({
//             _id: user._id,
//             fullName: user.fullName,
//             email: user.email,
//             profilePic: user.profilePic,
//         });
//     } catch (error) {
//         console.log("Error in login controller", error.message);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// export const logout = (req, res) => {
//     try {
//         res.cookie("jwt", "", { maxAge: 0 });
//         res.status(200).json({ message: "Logged out successfully" });
//     } catch (error) {
//         console.log("Error in logout controller", error.message);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// export const updateProfile = async (req, res) => {
//     try {
//         const { profilePic } = req.body;
//         const userId = req.user._id;

//         if (!profilePic) {
//             return res.status(400).json({ message: "Profile pic is required" });
//         }

//         const uploadResponse = await cloudinary.uploader.upload(profilePic);
//         const updatedUser = await User.findByIdAndUpdate(
//             userId,
//             { profilePic: uploadResponse.secure_url },
//             { new: true }
//         );

//         res.status(200).json(updatedUser);
//     } catch (error) {
//         console.log("error in update profile:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// export const checkAuth = (req, res) => {
//     try {
//         res.status(200).json(req.user);
//     } catch (error) {
//         console.log("Error in checkAuth controller", error.message);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };



import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    getUsers: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get("/message/users", { withCredentials: true });
            set({ users: res.data });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isUsersLoading: false });
        }
    },

    getMessages: async (userId) => {
        set({ isMessagesLoading: true });
        try {
            const res = await axiosInstance.get(`/message/${userId}`);
            set({ messages: res.data });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isMessagesLoading: false });
        }
    },
    sendMessage: async (messageData) => {
        const { selectedUser, messages } = get();
        try {
            const res = await axiosInstance.post(`/message/send/${selectedUser._id}`, messageData);
            set({ messages: [...messages, res.data] });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },

    subscribeToMessages: () => {
        const { selectedUser } = get();
        if (!selectedUser) return;

        const socket = useAuthStore.getState().socket;

        socket.on("newMessage", (newMessage) => {
            const isMessageSentFromSelectedUser = newMessage.senderId === selectedUser._id;
            if (!isMessageSentFromSelectedUser) return;

            set({
                messages: [...get().messages, newMessage],
            });
        });
    },

    unsubscribeFromMessages: () => {
        const socket = useAuthStore.getState().socket;
        socket.off("newMessage");
    },

    setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
