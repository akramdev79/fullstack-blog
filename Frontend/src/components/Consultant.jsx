
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
import { Textarea } from "@/components/ui/textarea"
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Consultant = () => {



  const [image, setImage] = useState(null);
  const [fullname, setFullname] = useState(null);
  const [title, setTitle] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [industry, setIndustry] = useState(null);
  const [experience, setExperience] = useState(null);
  const [workExperience, setWorkExperience] = useState(null);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
        setImage(file);
        setPreview(URL.createObjectURL(file));
    }
  };

  

  const navigate = useNavigate();
 

const handleSubmit = async (event) => {
  event.preventDefault();
  setLoading(true);

  const formData = new FormData();
  formData.append('fullname', fullname);
 formData.append('title', title);
 formData.append('industry', industry);
 formData.append('email', email);
 formData.append('phone', phone);
 formData.append('address', address);
 formData.append('experience', experience);
 formData.append('workExperience', workExperience);
if(image){
        formData.append('image',image);
}


 try {
  
  let response = await axios.post('/api/consultant/create-consultant', formData, {
    headers: {'Content-Type': 'multipart/form-data'}
  });

  console.log(response);

  toast.success('created successfully');
  
  setLoading(false);
 // setTitle('');
 // setContent('');
 // setPreview('');
  //setImage(null);

  
 } catch (error) {
    toast.error(error.response.data.message);
    setLoading(false);
    console.log(error.message);

 }
}
  return (
    <div className="container flex justify-center items-center my-10">

    <Card className="w-[800px] ">
      <CardHeader>
        <CardTitle>Register Consultant</CardTitle>
        <CardDescription>Consultant registration.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="fullname">FullName</Label>
              <Input id="fullname" placeholder="Enteryour fullname" onChange={(e) => setFullname(e.target.value)} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enteryour title" onChange={(e) => setTitle(e.target.value)} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="industry">Industry</Label>
              <Input id="industry" placeholder="Enteryour industry" onChange={(e) => setIndustry(e.target.value)} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="experience">Experience</Label>
              <Input id="experience" placeholder="Enteryour experience" onChange={(e) => setExperience(e.target.value)} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="workExperience">Work Experience</Label>
              <Textarea id="workExperience" placeholder="Enteryour Work Experience" onChange={(e) => setWorkExperience(e.target.value)}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Enter your email"  onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input type="number" id="phone" placeholder="Enter your phone"  onChange={(e) => setPhone(e.target.value)} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="Enter your address"  onChange={(e) => setAddress(e.target.value)} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="image">Image</Label>
              <Input type ="file" id="image" placeholder="Enter image"  onChange = {handleImageChange} required/>
              {preview && <img src={preview} alt="Preview" className='w-[200px] h-[200px]'/>}
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

export default Consultant
