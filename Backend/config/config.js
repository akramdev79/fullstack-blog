import dotenv from 'dotenv'

dotenv.config();

export const port = process.env.PORT || 5000;
export const secretToken = process.env.TOKEN_KEY;

export const cloud_name = process.env.CLOUDNAME;
export const api_key = process.env.API_KEY;
export const api_secret = process.env.API_SECRET;
