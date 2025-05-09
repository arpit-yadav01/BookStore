import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";  

import bookRoute from "./route/book.route.js";
import userRoute from './route/user.route.js';


const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

if (!URI) {
  console.error(' MONGO_URI not found in .env');
  process.exit(1);
}

mongoose.connect(URI)
  .then(() => console.log(' Connected to MongoDB'))
  .catch(err => {
    console.error(' Connection failed:', err);
    process.exit(1);
  });

  app.use("/book", bookRoute);
  app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(` Server is listening on port ${PORT}`);
});
