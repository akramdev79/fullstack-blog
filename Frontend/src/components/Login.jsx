import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Label } from './ui/Label'
import { Input } from './ui/Input'
import { Button } from './ui/button'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
  

const Login = () => {
    const [formData, setFormData] = useState({
        username : '',
        password : ''
    })

    const { login, user } = useUser();

    useEffect(() => {
      
      if(user) navigate('/')
    
    }, [user]);

    const [ loading, setLoading ] = useState(false)

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
          });      
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {

            const {data} = await axios.post('/api/user/login', formData);
            
            toast.success('Successfuly logged in');
          console.log({"messageUSer" : data});
            login(data, data.expiresIn);  
            navigate('/consultant');
        // console.log(data);
            setLoading(false);
        } catch (error) {
          toast.error(error.response.data.message);
            setLoading(false);
            console.log(error)
          
        }
     
        
    }


  return (
    <div className='container mt-10 flex justify-center'>
      <Card className="w-[500px]">
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>Login Page</CardDescription>
  </CardHeader>
  <CardContent>
  <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter your username"  onChange = {handleInputChange} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Enter your Password"  onChange = {handleInputChange} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
            <Button className="bg-[#1E3F78]">Login</Button>
            </div>
          </div>
        </form>
  </CardContent>
  <CardFooter>
  
  </CardFooter>
</Card>

    </div>
  )
}

export default Login
