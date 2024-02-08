
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
import { useNavigate, useParams } from 'react-router-dom'
import { Textarea } from "@/components/ui/textarea"

const UpdateConsultant = () => {

  const {id} = useParams();
  const [consultants, setconsultants] = useState({});



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
  

   
  useEffect(() => {

    const readConsultants = async () => {
    setLoading(true);
    
    try {
        const {data} =  await axios.get(`/api/consultant/get-consultant/${id}`);
        setconsultants(data);
        setLoading(false);
        setPreview(data.image);
setImage(data.image);
setFullname(data.fullname);
setAddress(data.address);
setPhone(data.phone);
setEmail(data.email);
setIndustry(data.industry);
setTitle(data.title);
setExperience(data.experience);
setWorkExperience(data.workExperience);

    
        
    } catch (error) {
        console.log(error.message);
        setLoading(false);
    }
    }
  
readConsultants();

}, []);



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

  console.log(title);

const formData = new FormData();
formData.append('fullname', fullname);
formData.append('title', title);
formData.append('industry', industry);
formData.append('email', email);
formData.append('phone', phone);
formData.append('address', address);
formData.append('workExperience', workExperience);
formData.append('experience', experience);

if(image){
    formData.append('image',image);
}

try {
  
  let response = await axios.post(`/api/consultant/update-consultant/${id}`, formData, {
    headers: {'Content-Type': 'multipart/form-data'}
  });

  console.log(response.data);

  toast.success('Updated successfully');
  navigate('/dashboard');
  
  setLoading(false);
 // setTitle('');
 // setContent('');
 // setPreview('');
  //setImage(null);

 } catch (error) {
    toast.error(error.response.data);
    setLoading(false);
    console.log(error.message);

 }
}
  return (
    <div className="container flex justify-center items-center my-10">

    <Card className="w-[800px]">
    <CardHeader>
    <CardTitle>Update Consultant</CardTitle>
    <CardDescription>Consultant registration.</CardDescription>
    </CardHeader>
    <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="fullname">FullName</Label>
              <Input id="fullname" placeholder="Enteryour fullname" value = {fullname} onChange={(e) => setFullname(e.target.value)} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enteryour title" value = {title} onChange={(e) => setTitle(e.target.value)} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="industry">Industry</Label>
              <Input id="industry" placeholder="Enteryour industry" value = {industry} onChange={(e) => setIndustry(e.target.value)} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="experience">Experience</Label>
              <Input id="experience" placeholder="Enteryour experience" value = {experience} onChange={(e) => setExperience(e.target.value)} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="workExperience">Work Experience</Label>
              <Textarea id="workExperience" placeholder="Enteryour Work Experience" value = {workExperience} onChange={(e) => setWorkExperience(e.target.value)}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Enter your email" value = {email}  onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input type="number" id="phone" placeholder="Enter your phone" value = {phone}  onChange={(e) => setPhone(e.target.value)} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="Enter your address"  value = {address} onChange={(e) => setAddress(e.target.value)} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="image">Image</Label>
              <Input type ="file" accept="image/*" id="image"  placeholder="Enter image"  onChange = {handleImageChange} />
              {preview && <img src={preview} alt="Preview" className='w-[200px] h-[200px]'/>}
            </div>
            <div className="flex flex-col space-y-1.5">
            <Button className="bg-[#1E3F78]">{loading ? "Updating..." : "Update"}</Button>
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

export default UpdateConsultant
