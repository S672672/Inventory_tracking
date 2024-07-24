import React from 'react'
import Navout from './components/navout'
import Footer from './components/Footer'
import WeeklyadContainer from './components/WeeklyadContainer'

export default function GrillingPage() {
  return (
    <>
    <Navout />
    <div className='ml-64 my-10'>
    <div className='text-black font-bold text-4xl pl-40'>AfterSchool All-Stars</div>
    </div>
    <WeeklyadContainer />
    <WeeklyadContainer />
    <WeeklyadContainer />
    <WeeklyadContainer />
    <Footer />
    </>
  )
}