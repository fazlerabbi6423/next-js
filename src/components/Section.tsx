import React from 'react'

export default function Section() {
  return (
    <div className='bg-amber-50 text-black p-4'>

     <div className='text-center  '>
        <p className='font-bold text-cyan-200 text-2xl '>Curated Intelligence for Modern Education</p>
        <p>Eliminate administrative noise with tools designed for precision and impact</p>
     </div>



     <div>

       <div className='flex justify-between bg-amber-100 '>
             <div className='flex justify-between p-3' >
            <div>
                <h1>Student Information</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas laudantium eos vitae asperiores at eaque aspernatur veniam hic, eius deserunt harum omnis quidem deleniti! Repellat nobis impedit magni minus.</p>
            </div>
            <img className='h-28 w-28' src="Student Group.png" alt="" />
        </div>


        <div className='bg-[#014253] text-white font-bold p-4 '>
            <h1 >Staff Management</h1>
            <p>Optimize human resources. Manage
teaching schedules, payroll, and
professional development in one secure
vault.</p>
 <p>Learn More .....</p>
        </div>

       </div>





     <div className='flex justify-between items-center h-80  p-4'>
           <div className='bg-[#E1E3E4] p-2'>
            <h1>Academic Analytics</h1>
            <p>Turn data into decisions with high-
performance reporting on institutional
health and student outcomes.</p>
        </div>
     
     <div className='flex justify-between items-center'>
        <img src="Analytics View.png" alt="" />
         
         <div className='bg-[#E1E3E4] p-2'>
            <h1>Automated Workflows</h1>
            <p>Reduce manual overhead by 40% with
automated notifications, grading summaries,
and enrollment funnels.</p>
           <div className='flex justify-between'>
            <button className='bg-amber-400 p-1'>Efficiency</button>
            <button className='bg-amber-400 p-1'>Speed</button>
           </div>
         </div>
     </div>
     </div>

     

     </div>








    </div>
  )
}
