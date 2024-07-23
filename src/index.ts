import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { NODE_ENV, JWT_SECRET, PORT, DB_ADDRESS } from '../config';

const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});