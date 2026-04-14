import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between bg-amber-50 text-black p-2'>
      <div>
        <h3 className='text-2xl'>The Academic Curator</h3>
      </div>
        <div className='flex gap-x-4'>
        <div>
            <Link className=' text-black text-2xl' href={'/home'}>Feature</Link>
        </div>
        <div>
           <Link className=' text-black text-2xl' href={"/service"}>Pricing</Link>
        </div>
        <div>
            <Link className=' text-black text-2xl' href={'/about'}>About</Link>
        </div>
    </div>
     <div>
      <button className='bg-red-200 p-2 '>Get Started</button>
     </div>
    </div>
  )
}
