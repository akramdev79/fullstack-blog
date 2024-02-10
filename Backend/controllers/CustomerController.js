import  {PrismaClient} from'@prisma/client';
const prisma = new PrismaClient()

export const registerCustomer = async (req, res) =>{
    try {
        
  
        const {email, fullname, address} = req.body;
        const phone = parseInt(req.body.phone)

        if(!fullname || !phone) return res.status(400).send('all fields are required');

        const user = await prisma.customers.create({
            data: { fullname, phone, email, address }
          });
          res.status(201).json(user);

    } catch (error) {
        res.status(500).send("Message"  + error.message);
    }
}