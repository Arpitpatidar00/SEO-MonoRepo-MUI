import express from 'express';
import { getMessage } from '@seo-monorepo/utils';
import type { AppMessage } from '@seo-monorepo/types';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  const message: AppMessage = { message: getMessage() };
  res.send(message);
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
