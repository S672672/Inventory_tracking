import React from 'react'

export default function yourItems({photo,name,desc,price}) {
  return (
    <>
        <div className='flex items-center justify-center'>
        <div className='object-fit'>{photo}</div>
        <div className='flex flex-col items-center justify-center'>
        <div className='w-full font bold'>{name}</div>
        <div className='font-bold text-xl'>{desc}</div>
        <div className='font-bold text-xl'>{price}</div>
        <div className='font-bold text-xl'>{price}</div>
        </div>
        </div>
    </>
  )
}