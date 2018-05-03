import { login, signup } from '../connectors/user';
import { signupForNewsletter } from '../connectors/newsletter';

export default {
  login: (obj, args) => login(args),
  signup: (obj, args) => signup(args),
  signupForNewsletter: (obj, args) => signupForNewsletter(args),
};
