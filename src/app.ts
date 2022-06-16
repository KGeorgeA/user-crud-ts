import express from 'express';
import logger from './logger';
import cors from './middlewares/cors';
// import errorHandler from './utils/errorHandler';

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cors);

// connection to database

// app.use(errorHandler);

export default app;
