import { login, signup } from '../connectors/user';

export default {
  login: (obj, args) => login(args),
  signup: (obj, args) => signup(args),
};
