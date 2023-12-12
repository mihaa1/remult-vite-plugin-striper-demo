//////////////////// STEP 1 - vite + express
import express, { Request, Response } from 'express';
const app = express();

app.use('/hello', (req: Request, res: Response) => {
  console.log('req.url', req.url);
  res.send('ok');
});

app.listen(process.env['PORT'] || 3003, () => console.log('Server started'));
