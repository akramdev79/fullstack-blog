import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import axios from 'axios';
import { Button } from '../components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
  

const ViewConsultant =  ({consultant}) => {

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const phoneNumber = consultant.phone;
  const whatsappUrl = `https://wa.me/${phoneNumber}`;


  return (
   
    <div className='flex gap-3'>
        

            <>

      <Card className="w-[300px] m-2 ">
  <CardHeader>
    <CardTitle> {consultant.fullname}</CardTitle>
    <CardDescription>{consultant.title}</CardDescription>
  </CardHeader>
  <CardContent>
<img className='' src={consultant.image} alt={consultant.fullname} width={200} />
{console.log(consultant.image)}
    <p >In kabadan {consultant.experience} Years of Experience</p>
  
   
  </CardContent>
  <CardFooter>
    <div className='flex gap-2'>
    <Link to={whatsappUrl} target="_blank">
<Button className="bg-[#1E3F78] hover:bg-blue-800" >Sitos ah ula xirir</Button>
</Link>
</div>
  </CardFooter>
</Card>
</>

    </div>
  )
}

export default ViewConsultant
