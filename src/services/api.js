import axios from "axios";

export const api = axios.create({
    baseURL: "https://sigescon-api.onrender.com"
});

