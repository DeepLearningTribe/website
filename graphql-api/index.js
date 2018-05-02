import app from './src/app';
import { PORT } from './src/config';

/* eslint-disable no-console */
app.listen(PORT, () => console.log(`GraphQL server is now running on http://localhost:${PORT}`));
/* eslint-enable */
