import { Router } from 'express';
import ProductModel from '../db/shemas/productos.shema.js';

const router = Router();

router.get('/', async (req, res) => {
  const product = await ProductModel.find({});
  console.log(product);
  res.send(product);
});

router.post('/', (req, res) => {
  try {
    const { name, price, url, store } = req.body;
    const product = new ProductModel({
      name,
      price,
      url,
      store,
      date: new Date(),
    });
    product.save();
    res.send(`Product ${name} with price ${price} and url ${url} created`);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error creating product');
  }
});

router.delete('/', async (req, res) => {
  const resp = await ProductModel.deleteMany({});
  res.send(resp);
});

export default router;
