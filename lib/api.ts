import axios from "axios";

console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

export const api = axios.create({
    baseURL: "",
    headers: {
        "Content-Type": "application/json",
    },
});
