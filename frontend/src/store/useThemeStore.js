
// // import { create } from "zustand";

// // // Utility to safely access localStorage on the client
// // const getInitialTheme = () => {
// //     if (typeof localStorage !== "undefined") {
// //         return localStorage.getItem("chat-theme") || "coffee";
// //     }
// //     return "coffee"; // default fallback
// // };

// // export const useThemeStore = create((set) => ({
// //     theme: localStorage.getItem("chat-theme") || "coffee",
// //     setTheme: (theme) => {
// //         localStorage.setItem("chat-theme", theme);
// //         set({ theme });

// //         // Apply theme to <html data-theme="..."> if you're using DaisyUI
// //         if (typeof document !== "undefined") {
// //             document.documentElement.setAttribute("data-theme", theme);
// //         }
// //     },
// // }));
// ;

// import { create } from "zustand";

// // Safely get the initial theme
// const getInitialTheme = () => {
//     if (typeof window !== "undefined") {
//         const stored = localStorage.getItem("chat-theme");
//         if (stored) {
//             // Apply theme on load
//             document.documentElement.setAttribute("data-theme", stored);
//             return stored;
//         }
//     }
//     return "coffee"; // default fallback
// };

// export const useThemeStore = create((set) => ({
//     theme: getInitialTheme(),
//     setTheme: (newTheme) => {
//         // Save to localStorage
//         localStorage.setItem("chat-theme", newTheme);
//         // Apply to document
//         if (typeof document !== "undefined") {
//             document.documentElement.setAttribute("data-theme", newTheme);
//         }
//         set({ theme: newTheme });
//     },
// }));

import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("chat-theme") || "coffee",
    setTheme: (theme) => {
        localStorage.setItem("chat-theme", theme);
        set({ theme });
    },
}));
