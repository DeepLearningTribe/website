import dotenv from 'dotenv';

const isProduction = process.env.NODE_ENV === 'production';
const env = isProduction ? process.env : dotenv.config().parsed;
const {
  PORT,
  WEB_URI,
  MAILCHIMP_REGION,
  MAILCHIMP_LIST_ID,
  MAILCHIMP_API_KEY,
} = env;

export {
  PORT,
  WEB_URI,
  MAILCHIMP_REGION,
  MAILCHIMP_LIST_ID,
  MAILCHIMP_API_KEY,
};
