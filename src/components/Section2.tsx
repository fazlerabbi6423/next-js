import React from 'react'

export default function Section2() {
  return (
    <div className='bg-[#FFFFFF] text-black p-4'>
        <div className='text-center'>
            <h1 className='font-bold text-cyan-200 text-2xl'>Scalable Pricing for Every Institution</h1>
            <p>Choose the curator that fits your institutional scale.</p>
        </div>
        <div className='flex justify-between'>
        <div>
                      <div>
                <p>Basic</p>
                <p>@199/</p>
                <p>Up to 200 Students</p>
                <p>Core Records Management</p>
                <p>Email Support</p>
          <button className='p-2 border-2'>Select Basic</button>
            </div>
      </div>

        <div className='bg-[#F0F0F0] p-4' >
            <div>
                <p>Basic</p>
                <p>@199/</p>
                <p>Up to 200 Students</p>
                <p>Core Records Management</p>
                <p>Email Support</p>
                <button className='p-2 bg-[#014253] text-white border-1'>Select Pro</button>
         </div>
        </div>

         <div>
            <div>
                <p>Basic</p>
                <p>@199/</p>
                <p>Up to 200 Students</p>
                <p>Core Records Management</p>
                <p>Email Support</p>
      <button className='p-2 border-2'>Contact Sales</button>
            </div>
         </div>
   </div>


    </div>
  )
}
