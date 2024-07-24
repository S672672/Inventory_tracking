import React from 'react'

export default function Heading({head}) {
  return (
    <div className='h-30 flex items-center justify-center my-3'>
    <div className='font-bold text-4xl text-black'>{head}</div>
    </div>
  )
}