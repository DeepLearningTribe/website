import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { WEB_URI } from './config';

import { schema } from './schema';

const app = express();
const corsOptions = {
  origin: WEB_URI,
  credentials: true,
};
app.use(cors(corsOptions));

const buildOptions = async req => ({
  schema,
  context: {
    authorization: req.headers.authorization,
  },
});

app.use('/graphql', bodyParser.json(), graphqlExpress(buildOptions));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

export default app;
