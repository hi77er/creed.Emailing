import dotenv from 'dotenv'

dotenv.config();

export const NODE_ENV: string | undefined = process.env.NODE_ENV
export const PORT: string | undefined = process.env.PORT
export const CORS_WHITELISTED_DOMAINS: string | undefined = process.env.CORS_WHITELISTED_DOMAINS
export const MONGO_DB_CONNECTION_STRING: string | undefined = process.env.MONGO_DB_CONNECTION_STRING