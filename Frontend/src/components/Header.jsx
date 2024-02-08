import { useUser } from '../hooks/useUser'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logSource from '../assets/lgo.png'

const Header = () => {

const {user, logOut} = useUser();
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};


  return (
    <header className="bg-[#1E3F78] p-4">
      <div className=" mx-auto flex  items-center justify-between">
      <div className={`${isOpen ? 'hidden' : 'block'}`}> 
       <img src={logSource} width={120}/>
      </div>

      

      {/* Responsive Menu Button */}
      <button className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}>
          {isOpen ? 
          <>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
          </>
          :
          <>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
          </>
          }
        </button>

        {/* Responsive Menu Items */}
          
      
             <ul className={`lg:flex items-center space-x-4 ${isOpen ?
               'flex flex-col bg-[#1E3F78]  gap-6 p-4 absolute top-0 z-10 right-0 text-left w-[300px]' 
                : 'hidden'}`}>
            {user ?
  (
           <>
            <span className='text-white'>Welcome {user?.username}</span>
            <Link className='text-white hover:text'  to="/">Home</Link>
            <Link className='text-white' to="/dashboard">View Consultants</Link>
            <Link className='text-white' to="/consultant">Register Consultant</Link>
            <button className='text-white' onClick={() =>logOut()}>LogOut</button>
            </>
   ) : (
            <>
            <Link className='text-white'   to="/customer">Customer</Link>
            <Link className='text-white'  to="/register">Register</Link>
            <Link className='text-white' to="/login">Login</Link>
            </>
   )
            }
      </ul>
    
      </div>
     </header>
    
  )
}

export default Header
