import cors from 'cors';
import express from 'express';
import { requestRouter } from './routes/request.routes.js';
import { errorHandler } from './middlewares/error.middlewares.js';

const app = express(); // create an Express application

app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
);

app.use(express.json()); // read JSON body from requests
app.use('/api/requests', requestRouter);

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Server is running',
  });
});

app.use(errorHandler);

export { app };
