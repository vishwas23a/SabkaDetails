import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import profile from '../components/star.png'
function Details() {

const [input,setInput]=useState('')
const [data,setData]=useState([])

const search=()=>{
  
  axios.get(`https://sabkadetails-backend.onrender.com/api/users/${input}`)
  .then((resp)=>setData(resp.data))
  .then(setInput(''))
  
}

  return (
    <div>
<div>


<div className='w-full justify-center flex mt-4 gap-5 flex-col  items-center h-full'>
<div className='w-full flex justify-center '>
  <input onChange={(e)=>setInput(e.target.value)}  value={input} className='p-2 w-60 border-green-800 border rounded-l-lg  ' type="text" required placeholder='Enter the Roll No.'/>
    <button onClick={search} className='p-2 bg-green-800 hover:bg-green-500 border-white rounded-r-xl border text-white' >Search</button>
</div>
{ data!=null ?
<div className='w-3/6 h-5/6  rounded-xl px-8 shadow-xl   shadow-green-800  '>

<div className='flex border border-t-0 border-l-0 border-r-0 border-b-green-800  px-10 py-4 justify-between'>
<div className='w-36  h-36 border rounded-full border-black z-10'>
  <img className=' bg-cover ' src={profile} alt="" />

</div>
<div className='  flex justify-center p-5 w-56  ' >
  <ul className='flex flex-col  justify-center gap-5  fixed   '>
    <li className='text-2xl text-green-800  font-bold '> {data.name}</li>
    <li className='text-xl text-green-500 font-semibold '> {data.phoneNo}</li>
    <li className='text-xl  text-green-500 font-semibold  '> {data.email}</li>
  </ul>
</div>

</div>  

<div className='p-12 flex  justify-between'>

  <div>
    <ul className=' flex flex-col gap-5'>
      <li className='text-xl text-green-800'>RollNO: <span className='text-xl  text-green-500 font-semibold'>{data.rollNo}</span> </li>
      <li className='text-xl text-green-800'>Course: <span className='text-xl  text-green-500 font-semibold'>{data.course}</span></li>
      <li className='text-xl text-green-800'>DOB: <span className='text-xl  text-green-500 font-semibold'> {data.dob}</span></li>
    </ul>
  </div>
  <div className=' flex flex-col flex-start gap-10 mr-20'>

 <a href={`${data.linkedIn}`} target='_blank'> <button
    
    className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1.1em"
      viewBox="0 0 512 512"
      stroke-width="0"
      fill="currentColor"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
      ></path>
    </svg>
    <span
      className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
    >
      Linkedin
    </span>
  </button>
  </a>
  <a href={`${data.portfolio}`} target='_blank'>
  <button
    className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#ea4c89] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
    href={`${data.portfolio}`}
  >
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1.2em"
      width="1.2em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9887 11.5716C19.9029 9.94513 19.3313 8.44745 18.4163 7.22097C18.1749 7.48407 17.8785 7.7698 17.4957 8.09159C16.5881 8.85458 15.4887 9.54307 14.1834 10.101C14.3498 10.4506 14.5029 10.7899 14.6376 11.1098L14.6388 11.1125C14.6652 11.1742 14.6879 11.2306 14.7321 11.3418C14.7379 11.3562 14.7433 11.3697 14.7485 11.3825C16.2621 11.2122 17.8576 11.2749 19.4049 11.4845C19.6106 11.5123 19.805 11.5415 19.9887 11.5716ZM10.6044 4.1213C10.7783 4.36621 10.9602 4.62859 11.1803 4.95378C11.7929 5.8589 12.396 6.81391 12.9604 7.79507C13.0749 7.99416 13.187 8.19289 13.2964 8.39112C14.5193 7.90993 15.5296 7.30281 16.3438 6.62486C16.6731 6.35063 16.9383 6.093 17.1403 5.86972C15.7501 4.70277 13.9571 4 12 4C11.524 4 11.0576 4.04158 10.6044 4.1213ZM4.25266 9.99755C4.83145 9.98452 5.48467 9.94941 6.29303 9.87518C7.90024 9.72758 9.54141 9.46249 11.1549 9.05274C10.5719 8.03721 9.93888 7.02331 9.29452 6.05378C8.98479 5.58775 8.68357 5.14992 8.45484 4.82642C6.39541 5.84613 4.83794 7.72658 4.25266 9.99755ZM5.78366 17.036C6.17111 16.4693 6.68061 15.8314 7.35797 15.1374C8.81199 13.6478 10.5286 12.4878 12.5139 11.8473C12.5417 11.8391 12.5604 11.8336 12.576 11.829C12.411 11.4651 12.2562 11.1405 12.1003 10.8342C10.2643 11.3687 8.3303 11.703 6.40279 11.8762C5.46319 11.9606 4.62005 11.9981 4 12.0044C4.00102 13.9112 4.66915 15.662 5.78366 17.036ZM15.0045 19.4166C14.9001 18.8745 14.7669 18.2706 14.5899 17.574C14.2689 16.3112 13.8668 15.012 13.373 13.7078C11.3712 14.4343 9.77574 15.4974 8.54309 16.7649C7.94904 17.3757 7.51244 17.9537 7.22642 18.4203C8.55892 19.4127 10.2109 20 12 20C13.0626 20 14.0769 19.7928 15.0045 19.4166ZM16.8778 18.3414C18.4073 17.1632 19.4985 15.444 19.8652 13.4703C19.5253 13.3865 19.094 13.3005 18.6196 13.2346C17.5756 13.0897 16.5014 13.0655 15.4409 13.2018C15.8933 14.4764 16.2642 15.7332 16.5608 16.9361C16.6903 17.4614 16.7958 17.9358 16.8778 18.3414ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
      ></path>
    </svg>
    <span
      className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
    >
      Portfolio
    </span>
  </button></a>


  </div>
</div>


</div> : 
<div>
  <h2 className='text-white text-2xl font-bold' >Data not available</h2>
</div>
}

</div>

</div>
      
    </div>
  )
}

export default Details
