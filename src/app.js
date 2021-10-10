import express from 'express';
import config from 'config';
import mongoose from 'mongoose';
import { handleError } from './utils/error';
import acronymRouter from './acronyms/acronymRoute';

const db = async () => {
  try {
    const conn = await mongoose.connect(config.db);
    return console.log('DB Connected');
  } catch (error) {
    console.log('DB Error', error.message);
  }
};
db();

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION!  Shutting down...');
  process.exit(0);
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', acronymRouter);

app.use((err, req, res, next) => {
  handleError(err, res);
});

export default app;
