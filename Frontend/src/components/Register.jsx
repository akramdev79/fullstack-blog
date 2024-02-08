import React, { useEffect } from 'react'
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
import { useUser } from '@/hooks/useUser'

const Register = () => {

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: ""
    })

    const { login, user } = useUser();

    useEffect(() => {
     // console.log("firstlogin", user);
      if(user) navigate('/')
    }, []);

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
      
        const {response} = await axios.post('/api/user/create-user',formData);
       // toast.success("succesfully registered");
       console.log(response);
        navigate('/login');
        setLoading(false)

      
     } catch (error) {
        toast.error(error.response.data.error);
        setLoading(false);
        console.log(error.response);
 
     }
    }


  return (
    <div className="container flex justify-center items-center my-10">

    <Card className="w-[800px]">
      <CardHeader>
        <CardTitle>Register User</CardTitle>
        <CardDescription>user registration.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Enteryour Email" onChange = {handleInputChange} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter your username"  onChange = {handleInputChange}required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Enter your Password"  onChange = {handleInputChange} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
            <Button className="bg-[#1E3F78]">{loading ? "Registering..." : "Register"}</Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
      
      </CardFooter>
    </Card>

  </div>
  
  )
}

export default Register
