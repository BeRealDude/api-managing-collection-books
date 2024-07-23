import dotenv from 'dotenv';
dotenv.config();

const { NODE_ENV, JWT_SECRET, PORT = 3000, DB_ADDRESS = 'mongodb://127.0.0.1:27017/bookstore-db' } = process.env;

export {
  NODE_ENV,
  JWT_SECRET,
  PORT,
  DB_ADDRESS,
};