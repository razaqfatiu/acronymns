import { ErrorHandler } from './error';
require('dotenv').config();

const auth = (req, res, next) => {
  try {
    const apiKey = req.headers.authorization;
    if (apiKey !== process.env.STATIC_API_KEY) {
      throw new ErrorHandler(401, 'Unauthorized');
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default auth;
