import React, { useEffect, useState } from 'react'
import ViewConsultant from './ViewConsultant';
import axios from 'axios';

const ViewConsultants = () => {

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


  return (
    <div >
          <h1 className='font-bold text-center mt-2'>Dooro Talabixiye</h1>
        <div className='flex flex-col lg:flex-row md:flex-row  justify-center items-center lg:justify-start '>
      
    { loading && <h1>loading...</h1>}
    {console.log(consultants)}

    { consultants?.map(consultant => (
        <ViewConsultant 
        key={consultant.id}
        consultant = {consultant}
        />
    ))}

</div>
    </div>
  )
}

export default ViewConsultants
