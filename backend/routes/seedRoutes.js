import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({}); // remove all previous records in the product model in the db
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers }); // sends products, users to the frontend
});
export default seedRouter;
