import Image from 'next/image'
import React from 'react'


export default function Banner() {
  return (
    <div className=' flex justify-between items-center bg-amber-100 text-black'>
         <div className=' justify-center text-center '>
            <p>Empower Your Institution with Scholar Flow Pro</p>
             
             <p>The modern administrative operating system for schools.
Simplify operations, engage students, and drive academic
excellence through curated data insights.</p>
<button className='bg-amber-400 p-2 text-black'>Get Started</button>
         </div>


         <div>
           <img src="Dashboard Preview.png" alt="" />
           
         </div>


    </div>
  )
}
