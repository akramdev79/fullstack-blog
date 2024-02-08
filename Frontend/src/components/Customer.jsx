
import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/Button"
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


import videoSource from '../assets/videos/v1.mp4'

const Customer = () => {

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: ""
})

  const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

  const handleInputChange = (event) =>{
    setFormData({
        ...formData,
        [event.target.id]: event.target.value
})

}

const handleSubmit = async (event) => {
  event.preventDefault();
  setLoading(true);

 try {
  
    const response = await axios.post('/api/customer/create-customer',formData);

    toast.success('Mahadsanid Waad Is Diwangelisay');
    navigate('/viewConsultant');
        
    setLoading(false)

  
 } catch (error) {
    toast.error(error.message);
    setLoading(false);
    console.log(error.message);

 }
}


const videoRef = useRef(null);

  const playPauseToggle = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  



  
  return (
    <div className="container flex flex-col lg:flex-row items-center md:flex-col gap-5  my-10 ">
      <div className='w-[350px] lg:w-[900px] md:w-[600px]'>
  

      <Card className=" lg:w-[600px] md:w-[600px] w-[350px]">
      <CardHeader>
        <CardTitle>Daawo Hordhac</CardTitle>
        <CardDescription>Video ga daawo.</CardDescription>
      </CardHeader>
      <CardContent>
       
      <video ref={videoRef} className='w-[1000px] border-solid border-2 border-[#1E3F78]' controls>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={playPauseToggle}>Daawo</button>

      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
   

    </div>

<div>
    <Card className="lg:w-[700px] md:w-[600px] w-[350px]">
      <CardHeader>
        <CardTitle>Is Diiwangeli</CardTitle>
        <CardDescription>Form ka Hoose Buuxi.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="fullname">Magacaga oo Sadexan</Label>
              <Input id="fullname" placeholder="Geli Magacaaga oo Sadexan" onChange = {handleInputChange} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Geli Email Kaaga"  onChange = {handleInputChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input type="number" id="phone" placeholder="Geli WhatsApp Number kaaga"  onChange = {handleInputChange} required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address">Goobta ad Ku sugan tahay</Label>
              <Input id="address" placeholder="Geli Address kaaga"  onChange = {handleInputChange}/>
            </div>
            <div className="flex flex-col space-y-1.5">
            <Button className="bg-[#1E3F78]">{loading ? "Diwangeli..." : "Is Diwangeli"}</Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
      
      </CardFooter>
    </Card>
</div>

  </div>
  )
}

export default Customer
