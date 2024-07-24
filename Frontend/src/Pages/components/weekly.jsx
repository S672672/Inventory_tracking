import React from 'react'

export default function Weekly({ad}) {
  return (
    <div className='flex itemx-center justify-around h-20 mx-20 px-10 my-5'>
    <div className='font-bold text-3xl text-black'>
    {ad}
    </div>
    <div className='font-bold text-2xl text-black underline cursor-pointer hover:text-red-700'>
    View All
    </div>
    </div>
  )
}