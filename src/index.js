import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import routerProduct from './routes/products.router.js';
import mongoose from 'mongoose';

// mongoose.set('strictQuery', true);
mongoose.set('strictQuery', true);
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
      console.log('Error connecting to database');
    } else {
      console.log('Connected to database');
    }
  }
);

const app = express();

app.use(express.json());

app.use('/api/products', routerProduct);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`first app listening on port ${port}!`);
});
