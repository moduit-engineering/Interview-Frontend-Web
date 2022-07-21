import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const header = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};
