import axios from 'axios';
import {
  MAILCHIMP_REGION,
  MAILCHIMP_LIST_ID,
  MAILCHIMP_API_KEY,
} from '../config';

export async function signupForNewsletter({ email }) {
  try {
    const uri = `https://${MAILCHIMP_REGION}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;
    const { status } = await axios.post(
      uri,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          CLASS: 'SUBSCRIBER',
        },
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`apikey:${MAILCHIMP_API_KEY}`).toString('base64')}`,
        },
      },
    );
    return status === 200;
  } catch (error) {
    return false;
  }
}
