import React from 'react'
import Weekly from './components/weekly'
import WeeklyadContainer from './components/WeeklyadContainer'
import Footer from './components/Footer'
import Navout from './components/navout'

export default function InsideWeeklyad() {
  return (
    <>
    <Navout />
    <div className='h-2/3 2-96 my-5'>
    <div className='flex items-center justify-center'>
    <img src='./src/assets/pictures/back to school.jpg' className='my-5 h-96 w-1/3'>
    </img>
    </div>
    <Weekly ad ='Back to school Breakfasts'/>
    <WeeklyadContainer />
    <Weekly ad ='after gym diet' />
    <WeeklyadContainer />
    <Weekly ad ='lunchtime legends' />
    <WeeklyadContainer />
    <Weekly ad ='Beverages' />
    <WeeklyadContainer />
    <Weekly ad = 'supplies for the study purpose' />
    <WeeklyadContainer />
    </div>
    <Footer />
    </>
  )
}