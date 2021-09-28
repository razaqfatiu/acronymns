import express from 'express';
import config from 'config';
import mongoose from 'mongoose';

const db = async () => {
  try {
    await mongoose.connect(config.get('db'));
    return console.log('DB Connected');
  } catch (error) {
    console.log('DB Error', error.message);
  }
};

db();

const app = express();

// console.log('started');

export default app;
