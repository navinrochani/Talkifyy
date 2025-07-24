// export function formatMessageTime(date) {
//     try {
//         const parsed = new Date(date);
//         if (isNaN(parsed.getTime())) throw new Error("Invalid Date");

//         return parsed.toLocaleTimeString("en-US", {
//             hour: "2-digit",
//             minute: "2-digit",
//             hour12: false,
//         });
//     } catch {
//         return "00:00";
//     }
// }


export function formatMessageTime(date) {
    return new Date(date).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
}
