import dotenv from 'dotenv';

const isProduction = process.env.NODE_ENV === 'production';
const env = isProduction ? process.env : dotenv.config().parsed;
const { PORT, WEB_URI } = env;

export { PORT, WEB_URI };
