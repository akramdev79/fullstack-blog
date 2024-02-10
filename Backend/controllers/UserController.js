import  bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import {secretToken} from '../config/config.js';

import  {PrismaClient} from'@prisma/client';
const prisma = new PrismaClient()

export const registerUser = async (req, res) =>{
    try {
      
        const {email, username, password} = req.body;

        if(!email || !username || !password) return res.status(400).send('all fields are required');
       
        const existingAdminUser = await prisma.user.findFirst({ where: { isAdmin: true } });

        if (existingAdminUser) {
        return res.status(400).json({ error: 'An admin user already exists.' });
        console.log('admin already exist');
        }

        const isUserExist = await prisma.user.findUnique({ where: { email: email} });
        if (isUserExist) {
          return res.status(400).json({ message: 'User already exist' });
        }
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = await prisma.user.create({
            data: { username, password: hashedPassword, email,  isAdmin: true }
          });
          res.status(201).json(user);
   
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
}

 
export const loginUser = async( req, res ) => {
    try {
        const { username, password } = req.body;
    
        const user = await prisma.user.findUnique({ where: { username: username } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(400).json({ message: 'Invalid credentials' });
        }
              // Generate JWT token
              const expiresIn = 7 * 24 * 60 * 60 * 1000; 
              const token = jwt.sign({ userId: user.id, username: user.username }, secretToken, { expiresIn });
      
              // Set the token as a cookie
              res.cookie('token', token, { httpOnly: true, maxAge: expiresIn  }); // Max age is in milliseconds (1 hour)
      
              // Send the success response and return to prevent further execution
              user.password = undefined;
             // return res.send({expiresIn, ...user  });
              res.status(200).send({ ...user, expiresIn });
      
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}