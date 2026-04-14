import React from 'react'

export default function Footer() {
  return (
    <div className='p-4 bg-[#FFFFFF] text-black flex  justify-between items-center'>

     <div>
        <h1 className='text-3xl text-amber-300'>The Academic Curator</h1>
        <p>Elevating educational administration through curated
data experiences and intelligent workflows. </p>
     </div>


     <div>
        <div className='flex justify-between gap-x-3  '>
            <p>Privacy </p>
        <p>Terms of Service </p>
        <p>Contact Support</p>
        </div>
     </div>


     <div>
        <p>© 2024 The Academic Curator. All rights reserved.</p>
     </div>

    </div>
  )
}
