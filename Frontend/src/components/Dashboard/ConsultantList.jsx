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
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
  

const ConsultantList =  ({consultant, handleDelete}) => {

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  return (
   
    <div className='flex flex-wrap gap-4'>

            <>

      <Card className="w-[300px]">
  <CardHeader>
    <CardTitle> {consultant.fullname}</CardTitle>
    <CardDescription>{consultant.title}</CardDescription>
  </CardHeader>
  <CardContent>
<img src={consultant.image} alt={consultant.fullname} />
<p >In kabadan {consultant.experience} Years of Experience</p>
  </CardContent>
  <CardFooter>
    <div className='flex gap-2'>
<Button onClick={() => navigate(`/consultant/${consultant.id}`)} className="bg-[#1E3F78]">Update</Button>
<Button onClick={() => handleDelete(consultant.id)} className="bg-red-800">Delete</Button>
</div>
  </CardFooter>
</Card>
</>

    </div>
  )
}

export default ConsultantList
