import express from 'express';
import cors from './middlewares/cors';
import appRouter from './routes';
// import errorHandler from './utils/errorHandler';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors);

app.use(appRouter);

// connection to database

// app.use(errorHandler);

export default app;
