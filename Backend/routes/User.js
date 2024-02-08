// routes/users.js

// Import Prisma client


// Your Express.js routes and logic here...


import express from 'express';

const userRouter = express.Router();

import { registerUser, loginUser } from '../controllers/UserController.js'

userRouter.post('/create-user', registerUser);

userRouter.post('/login', loginUser);


export default userRouter;

