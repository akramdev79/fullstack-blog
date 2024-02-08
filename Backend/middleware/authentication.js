
import jwt from 'jsonwebtoken';
import { secretToken } from '../config/config.js';

const secretKey = secretToken;

export const verifyToken = (req, res, next) => {
const token = req.cookies.token;
console.log(token);
  if (!token) {
    return res.status(401).json({ error: 'Token is missing' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = decoded;
    console.log(req.user);
    next();
  });
}

