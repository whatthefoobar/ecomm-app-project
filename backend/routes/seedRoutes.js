import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({}); // remove all previous records in the product model in the db
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts }); // sends products to the frontend
});
export default seedRouter;
