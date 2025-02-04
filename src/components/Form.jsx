import React, { useState } from 'react'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Form() {
const [data,setData]=useState({
  name: '',
  rollNo: '',
  email: '',
  phoneNo: '',
  course: '',
  dob: '',
  linkedIn: '',
  portfolio: ''
}
  
)

const handleChange=(e)=>{
  const{name,value}=e.target;
  setData((prev)=>({
    ...prev,
    [name]:value
  }))

}
const submitData=(e)=>{
  e.preventDefault();

  axios.post("https://sabkadetails-backend.onrender.com/api/users",data)
  .then(res=> {
    console.log(res);
      toast("Student registerd Successfully",{autoClose: 1000})
        setData({
          name: '',
          rollNo: '',
          email: '',
          phoneNo: '',
          course: '',
          dob: '',
          linkedIn: '',
          portfolio: ''

        })
})
  .catch((err)=>{
console.log("something went wrong",err);
  })


}

  return (
    <div className='w-full flex justify-center   '>
   
      <ToastContainer/>
<div className='w-3/4  bg-white h-4/5  mt-8 rounded-2xl  shadow-2xl  shadow-green-800'>
      <form onSubmit={submitData}>

        <div className=' justify-center  md:h-max  md:flex flex-wrap  p-4 gap-10    h-max  '>
      <div className=' md:w-96  w-full gap-6 p-4 mt-8 h-full flex-col flex justify-evenly  '>
       <input type="text" value={data.name}  required placeholder='Name' onChange={handleChange} name='name' className='border border-green-800  focus:outline-none rounded-lg p-3' />
       <input type="number" value={data.rollNo} required placeholder='Roll No.' onChange={handleChange} name='rollNo' className='border border-green-800 focus:outline-none  rounded-lg p-3' />
 
       <input type="email" value={data.email} required placeholder='Email' onChange={handleChange} name='email' className='border border-green-800 focus:outline-none  rounded-lg p-3' />
       <input type="number"  value={data.phoneNo} required placeholder='PhoneNo ' onChange={handleChange} name='phoneNo' className='border border-green-800 focus:outline-none  rounded-lg p-3' />
      
       </div> 
      <div className='h-full p-4 md:mt-8 w-full md:w-96 gap-6 flex flex-col justify-evenly'>
       <input type="text" value={data.course}  required onChange={handleChange} name='course' placeholder='Course' className='border border-green-800 focus:outline-none  rounded-lg p-3' />
       <input type="date" value={data.dob} required onChange={handleChange} name='dob'  placeholder='DOB' className='border border-green-800 focus:outline-none  rounded-lg p-3' />
       <input type="text" value={data.linkedIn} required onChange={handleChange} name='linkedIn'  placeholder='LinkedIn' className='border focus:outline-none  border-green-800 rounded-lg p-3' />
       <input type="text" value={data.portfolio} required onChange={handleChange} name='portfolio' placeholder='Portflio' className='border focus:outline-none  border-green-800 rounded-lg p-3' />

       </div>
       </div>
       <div className='flex justify-center  mb-8 ' >
      <button type='submit'
  className="overflow-hidden  w-32 p-2 h-12 bg-green-800 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
  Send
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-green-500 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span 
    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >Send </span>
</button>
      
      </div>
  
      </form>
      </div>
      
    </div>
  )
}

export default Form
