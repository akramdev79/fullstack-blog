// routes/Customer.js
import express from 'express';

const customerRouter = express.Router();

import { registerCustomer } from '../controllers/CustomerController.js'

customerRouter.post('/create-customer', registerCustomer);

export default customerRouter;
