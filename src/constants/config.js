import dotenv from "dotenv";

// dotenv
dotenv.config({});

export const isProduction = process.env.NODE_ENV === "production";
export const isDevelopment = !isProduction;
export const port = process.env.PORT;
