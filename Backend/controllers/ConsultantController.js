import cloudinary from '../config/cloudinary.js';
import path from 'path';
import  {PrismaClient} from'@prisma/client';
const prisma = new PrismaClient()
export const registerConsultant = async (req, res) =>{

  try {

    const {email, fullname, address, industry, title, workExperience} = req.body;
    const phone = parseInt(req.body.phone);
    const experience = parseInt(req.body.experience); 

    if(!email || !fullname || !address || !industry || !title || !workExperience || !phone || !experience) return res.status(400).send('all fields are required');

    if(!req.file) return res.status(400).send('file is required');

    console.log(req.body);
      
        const isConsultantExist = await prisma.consultants.findUnique({ where: { email: email} });
        if (isConsultantExist) {
          return res.status(400).json({ message: 'consultant already exist' });
        }

        const isConsultantExit = await prisma.consultants.findUnique({ where: { fullname: fullname} });
        if (isConsultantExit) {
          return res.status(400).json({ message: 'consultant already exist' });
        }
       // console.log(req.body);

       let imageUrl;
       let result;
    
       // Check if there is an uploaded image
       if (req.file) {
         let encodedImage = `data:image/jpeg;base64,${req.file.buffer.toString('base64')}`;
          result = await cloudinary.uploader.upload(encodedImage, {
                   resource_type: 'image',
                   transformation: [{ width: 500, height: 500, crop: 'limit' }],  
               });
         imageUrl = result.url;
       }
        

        const user = await prisma.consultants.create({
            data: { fullname, email, phone, address,experience, workExperience,industry, title, image: result?.url || null }
          });
          
          res.status(201).json(user);

    } catch (error) {
        res.status(500).send("Message"  + error.message);
        console.log(error.message);
    }
}

export const getConsultants = async (req, res) => {
    try {
        const consultants = await prisma.consultants.findMany();
        res.json(consultants);
       
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    
}


export const deleteConsultants = async (req, res) => {
    const consultantId = parseInt(req.params.id);
  try {
    await prisma.consultants.delete({
      where: { id: consultantId },
    });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
    
}


export const getConsultant = async (req, res) => {
  const consultantId = parseInt(req.params.id);
  try {
 
    const consultant = await prisma.consultants.findUnique({
      where: {
        id: consultantId, // Replace with the specific ID you're looking for
      },
    });

    res.json(consultant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export const updateConsultant = async (req, res) =>{
 
   
        const consultantId = parseInt(req.params.id);

      const {email, fullname, address, industry, title, workExperience} = req.body;
      const phone = parseInt(req.body.phone);
      const experience = parseInt(req.body.experience);

      try {
        let imageUrl;
    
        // Check if there is an uploaded image
        if (req.file) {
          let encodedImage = `data:image/jpeg;base64,${req.file.buffer.toString('base64')}`;
          const result = await cloudinary.uploader.upload(encodedImage, {
                    resource_type: 'image',
                    transformation: [{ width: 500, height: 500, crop: 'limit' }],  
                });
          imageUrl = result.url;
        }
    
        // Update consultant in the database
       const updatedConsultant = await prisma.consultants.update({
          where: { id: consultantId },
          data: {
            fullname,
            title,
            email,
            address,
            phone,
            industry,
            experience,
            workExperience,
            image: imageUrl || undefined, // Update the image only if a new one is provided
          },
        });
    
        res.json(updatedConsultant);
      } catch (error) {
        console.error(error.message);
        res.status(500).json(error.message );
      }
}

