import React from 'react'
import Navout from './components/navout'
import Footer from './components/Footer'
import InWeeklyprop from './components/Inweeklyprop'
import WeeklyadContainer from './components/WeeklyadContainer'
import Weekly from './components/weekly'

export default function InWeekly() {
  return (
    <>
    <Navout />
    <div className='flex flex-col items-centre justify-center mx-20'>
    <InWeeklyprop image='./src/assets/pictures/momo.jpg' description='The best ever production of the weekly ad' totallb='3.4lb' perlb='$3/lb' price='$11.2' loggedIn={true}/>
    <Weekly ad='suggested item'/>
    <div className='mb-10'>
    <WeeklyadContainer />
    </div>
    </div>
    <Footer />
    </>
  )
}