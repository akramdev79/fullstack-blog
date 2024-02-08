import React, { useEffect, useState } from 'react'
import ConsultantList from './ConsultantList';
import axios from 'axios';

const ConsultantLists = () => {

    const [consultants, setconsultants] = useState([]);
    const [loading, setLoading] = useState(false);



        useEffect(() => {

            const readConsultants = async () => {
            setLoading(true);
            
            try {
                const {data} =  await axios.get('/api/consultant/get-consultants');
               setconsultants(data);
                setLoading(false);
                console.log(data);  
                
            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
            }
          
        readConsultants();
    
        }, []);


        
  const handleDelete = async (id) => {

    if(!confirm("are you sure to delete this")) return;

    const prevData = [...consultants]
    const updatedData = prevData.filter(consultant => consultant.id != id);
    setconsultants(updatedData);

    try {
      // Assuming your API has an endpoint for deleting an item by ID

    const {data} = await axios.delete(`/api/consultant/delete-consultant/${id}`);

    setLoading(false)

      // Update the data state after successful deletion
      //setData((prevData) => prevData.filter(item => item.id !== id));
    } catch (error) {
      console.log(error.message);
    }

  }
    


  return (
    <div >
        <div className='flex flex-col lg:flex-row md:flex-row gap-3  justify-center items-center lg:justify-start'>
    { loading && <h1>loading...</h1>}
    {console.log(consultants)}

    { consultants?.map(consultant => (
        <ConsultantList 
        key={consultant.id}
        consultant = {consultant}
        handleDelete = {handleDelete}
        />
    ))}

</div>
    </div>
  )
}

export default ConsultantLists
