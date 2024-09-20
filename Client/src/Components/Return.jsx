import React from 'react'
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export default function Return({additionalcss}) {
    const navigate=useNavigate();
  return (
   
           <button onClick={()=>{
        navigate('/');
      }} className={` flex  gap-1 items-center text-white font-semibold mr-1 text-lg hover:text-blue-200 ${additionalcss}`}>
   <FaHome className='text-3xl hover:text-blue-100 ' /> <h1 className='mt-1'>Home</h1> 
</button>

  )
}
