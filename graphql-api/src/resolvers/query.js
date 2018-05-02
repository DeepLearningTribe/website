import { getCurrentUser } from '../connectors/user';

export default {
  user: (obj, args, context) => getCurrentUser(context.authorization),
};
