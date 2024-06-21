import React from 'react'
import image1 from '../components/back.jpg'
import { NavLink} from 'react-router-dom'
function FirstPage() {
  return (
    <div>

      <div className=' flex w-full h-full bg-slate-200 mt-10 '>

        <div className='flex-col  flex  justify-center text-center gap-20'>
          <h1 className=' text-6xl font-bold text-purple-800 underline underline-offset-2 font-mono'>Sabka Details</h1>
          <p className='text-2xl'>Here you can see the student details who have registered</p>
          <div className='w-full flex justify-center '> 
         <NavLink to="Form"> <button
  className="relative py-2 px-10 text-purple-700 text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md shadow-purple-800 hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-purple-500 before:to-purple-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
>
  Resgister
</button>
</NavLink>
          </div>
        </div>
        <div className=' h-2/3 w-2/3'>
          <img src={image1} alt="image" />
        </div>
      </div>

    </div>
  )
}

export default FirstPage
