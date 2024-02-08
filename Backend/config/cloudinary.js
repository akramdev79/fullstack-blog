import cloudinary from 'cloudinary';
import { cloud_name, api_key, api_secret } from './config.js';
          
cloudinary.v2.config({ 
  cloud_name: cloud_name, 
  api_key: api_key, 
  api_secret: api_secret
});


export default cloudinary.v2;