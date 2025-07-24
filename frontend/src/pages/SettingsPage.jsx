
// // import { useEffect, useState } from "react";
// // import { Settings, Sun, Moon, Trash2, Bell } from "lucide-react";

// // const THEMES = ["light", "dark", "cupcake", "synthwave", "forest", "aqua"];

// // const SettingsPage = () => {
// //     const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
// //     const [notificationsEnabled, setNotificationsEnabled] = useState(true);

// //     useEffect(() => {
// //         document.documentElement.setAttribute("data-theme", theme);
// //         localStorage.setItem("theme", theme);
// //     }, [theme]);

// //     const handleDeleteAccount = () => {
// //         // TODO: Confirm and call API to delete account
// //         const confirmed = confirm("Are you sure you want to delete your account? This action cannot be undone.");
// //         if (confirmed) {
// //             console.log("Deleting account...");
// //             // Call delete API here
// //         }
// //     };

// //     return (
// //         <div className="h-screen pt-20">
// //             <div className="max-w-2xl mx-auto p-4 py-8">
// //                 <div className="bg-base-300 rounded-xl p-6 space-y-8">
// //                     <div className="text-center">
// //                         <h1 className="text-2xl font-semibold flex items-center justify-center gap-2">
// //                             <Settings className="w-6 h-6" />
// //                             Settings
// //                         </h1>
// //                         <p className="mt-2 text-sm text-zinc-400">Manage your preferences and account</p>
// //                     </div>

// //                     {/* Theme Switcher */}
// //                     <div>
// //                         <label className="text-sm mb-1 block font-medium">Theme</label>
// //                         <select
// //                             className="select select-bordered w-full"
// //                             value={theme}
// //                             onChange={(e) => setTheme(e.target.value)}
// //                         >
// //                             {THEMES.map((t) => (
// //                                 <option key={t} value={t}>
// //                                     {t.charAt(0).toUpperCase() + t.slice(1)}
// //                                 </option>
// //                             ))}
// //                         </select>
// //                         <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
// //                             {theme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
// //                             Current Theme: <span className="capitalize">{theme}</span>
// //                         </div>
// //                     </div>

// //                     {/* Notifications Toggle */}
// //                     <div className="flex items-center justify-between border-t pt-4">
// //                         <div className="flex items-center gap-2">
// //                             <Bell className="w-5 h-5" />
// //                             <span className="text-sm">Notifications</span>
// //                         </div>
// //                         <input
// //                             type="checkbox"
// //                             className="toggle toggle-primary"
// //                             checked={notificationsEnabled}
// //                             onChange={() => setNotificationsEnabled((prev) => !prev)}
// //                         />
// //                     </div>

// //                     {/* Delete Account */}
// //                     <div className="border-t pt-6">
// //                         <button
// //                             className="btn btn-error w-full flex items-center justify-center gap-2"
// //                             onClick={handleDeleteAccount}
// //                         >
// //                             <Trash2 className="w-4 h-4" />
// //                             Delete My Account
// //                         </button>
// //                         <p className="text-xs mt-2 text-zinc-500 text-center">
// //                             This action is irreversible. Your data will be permanently deleted.
// //                         </p>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default SettingsPage;
// import { THEMES } from "../constants";
// import { useThemeStore } from "../store/useThemeStore";
// import { Send } from "lucide-react";

// const PREVIEW_MESSAGES = [
//     { id: 1, content: "Hey! How's it going?", isSent: false },
//     { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
// ];

// const SettingsPage = () => {
//     const { theme, setTheme } = useThemeStore();

//     return (
//         <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
//             <div className="space-y-6">
//                 <div className="flex flex-col gap-1">
//                     <h2 className="text-lg font-semibold">Theme</h2>
//                     <p className="text-sm text-base-content/70">Choose a theme for your chat interface</p>
//                 </div>

//                 <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
//                     {THEMES.map((t) => (
//                         <button
//                             key={t}
//                             className={`
//                 group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
//                 ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
//               `}
//                             onClick={() => setTheme(t)}
//                         >
//                             <div className="relative h-8 w-full rounded-md overflow-hidden" data-theme={t}>
//                                 <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
//                                     <div className="rounded bg-primary"></div>
//                                     <div className="rounded bg-secondary"></div>
//                                     <div className="rounded bg-accent"></div>
//                                     <div className="rounded bg-neutral"></div>
//                                 </div>
//                             </div>
//                             <span className="text-[11px] font-medium truncate w-full text-center">
//                                 {t.charAt(0).toUpperCase() + t.slice(1)}
//                             </span>
//                         </button>
//                     ))}
//                 </div>

//                 {/* Preview Section */}
//                 <h3 className="text-lg font-semibold mb-3">Preview</h3>
//                 <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
//                     <div className="p-4 bg-base-200">
//                         <div className="max-w-lg mx-auto">
//                             {/* Mock Chat UI */}
//                             <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
//                                 {/* Chat Header */}
//                                 <div className="px-4 py-3 border-b border-base-300 bg-base-100">
//                                     <div className="flex items-center gap-3">
//                                         <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
//                                             J
//                                         </div>
//                                         <div>
//                                             <h3 className="font-medium text-sm">John Doe</h3>
//                                             <p className="text-xs text-base-content/70">Online</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Chat Messages */}
//                                 <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
//                                     {PREVIEW_MESSAGES.map((message) => (
//                                         <div
//                                             key={message.id}
//                                             className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
//                                         >
//                                             <div
//                                                 className={`
//                           max-w-[80%] rounded-xl p-3 shadow-sm
//                           ${message.isSent ? "bg-primary text-primary-content" : "bg-base-200"}
//                         `}
//                                             >
//                                                 <p className="text-sm">{message.content}</p>
//                                                 <p
//                                                     className={`
//                             text-[10px] mt-1.5
//                             ${message.isSent ? "text-primary-content/70" : "text-base-content/70"}
//                           `}
//                                                 >
//                                                     12:00 PM
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 {/* Chat Input */}
//                                 <div className="p-4 border-t border-base-300 bg-base-100">
//                                     <div className="flex gap-2">
//                                         <input
//                                             type="text"
//                                             className="input input-bordered flex-1 text-sm h-10"
//                                             placeholder="Type a message..."
//                                             value="This is a preview"
//                                             readOnly
//                                         />
//                                         <button className="btn btn-primary h-10 min-h-0">
//                                             <Send size={18} />
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default SettingsPage;



import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
    { id: 1, content: "Hey! How's it going?", isSent: false },
    { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
    const { theme, setTheme } = useThemeStore();

    return (
        <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
            <div className="space-y-6">
                <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-semibold">Theme</h2>
                    <p className="text-sm text-base-content/70">Choose a theme for your chat interface</p>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                    {THEMES.map((t) => (
                        <button
                            key={t}
                            className={`
                group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
                ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
              `}
                            onClick={() => setTheme(t)}
                        >
                            <div className="relative h-8 w-full rounded-md overflow-hidden" data-theme={t}>
                                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                                    <div className="rounded bg-primary"></div>
                                    <div className="rounded bg-secondary"></div>
                                    <div className="rounded bg-accent"></div>
                                    <div className="rounded bg-neutral"></div>
                                </div>
                            </div>
                            <span className="text-[11px] font-medium truncate w-full text-center">
                                {t.charAt(0).toUpperCase() + t.slice(1)}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Preview Section */}
                <h3 className="text-lg font-semibold mb-3">Preview</h3>
                <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
                    <div className="p-4 bg-base-200">
                        <div className="max-w-lg mx-auto">
                            {/* Mock Chat UI */}
                            <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
                                {/* Chat Header */}
                                <div className="px-4 py-3 border-b border-base-300 bg-base-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
                                            J
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-sm">John Doe</h3>
                                            <p className="text-xs text-base-content/70">Online</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Chat Messages */}
                                <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
                                    {PREVIEW_MESSAGES.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                                        >
                                            <div
                                                className={`
                          max-w-[80%] rounded-xl p-3 shadow-sm
                          ${message.isSent ? "bg-primary text-primary-content" : "bg-base-200"}
                        `}
                                            >
                                                <p className="text-sm">{message.content}</p>
                                                <p
                                                    className={`
                            text-[10px] mt-1.5
                            ${message.isSent ? "text-primary-content/70" : "text-base-content/70"}
                          `}
                                                >
                                                    12:00 PM
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Chat Input */}
                                <div className="p-4 border-t border-base-300 bg-base-100">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            className="input input-bordered flex-1 text-sm h-10"
                                            placeholder="Type a message..."
                                            value="This is a preview"
                                            readOnly
                                        />
                                        <button className="btn btn-primary h-10 min-h-0">
                                            <Send size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SettingsPage;
