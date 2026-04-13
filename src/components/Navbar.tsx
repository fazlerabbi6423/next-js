import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex space-x-5 justify-between'>
        <div>
            <Link className='bg-amber-400 text-black text-2xl' href={'/home'}>Home</Link>
        </div>
        <div>
           <Link className='bg-amber-400 text-black text-2xl' href={"/service"}>Service</Link>
        </div>
        <div>
            <Link className='bg-amber-400 text-black text-2xl' href={'/about'}>About</Link>
        </div>
    </div>
  )
}
