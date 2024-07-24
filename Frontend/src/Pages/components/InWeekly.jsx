import React from 'react'

export default function InWeekly({image,desc}) {
  return (
    <div className='h-96 w-96 bg-brown-400 border-black rounded flex items-center justify '>
    <img className='object-fit h-80 w-full' src={image}></img>
    <div className='font-bold text-xl text-black'>{desc}</div>
    <button className='rounded-lg bg-red-400 hover:bg-blue-400 transition hover:scale-105 cursor-pointer'>Buy now</button>
    </div>
  )
}