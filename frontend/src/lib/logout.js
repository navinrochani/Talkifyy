import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";

export const logout = async () => {
    try {
        await axios.post("http://localhost:5001/api/auth/logout", {}, { withCredentials: true });

        // Clear your Zustand auth state (or localStorage, etc.)
        useAuthStore.getState().setAuthUser(null);

        // Optionally redirect
        window.location.href = "/login";
    } catch (err) {
        console.error("Logout failed:", err);
    }
};
