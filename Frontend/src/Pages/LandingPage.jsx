import React, { useState } from 'react';
import Navout from './components/navout';
import Advert from './components/advert';
import Heading from './components/heading';
import Offers from './components/offers';
import Weekly from './components/weekly';
import WeeklyadContainer from './components/WeeklyadContainer';
import Grilling from './components/Grilling';
import Dailies from './components/Dailies';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Login from './Login';
import Signup from './Signup';
import { NavLink } from 'react-router-dom';

export default function LandingPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  return (
    <div className='flex flex-col'>
      <Navout 
        onLoginClick={() => setIsLoginModalOpen(true)} 
        onSignupClick={() => setIsSignupModalOpen(true)} 
      />
      <div className='flex items-center justify-center'>
        <Advert />
      </div>
      <Heading head='Make your shopping easy' />
      <div className='flex items-center justify-center m-2 gap-4'>
      <NavLink to ='/offers'>
        <Offers photo='./src/assets/pictures/pizza.jpeg' offer='diwali special' details='get 20% discount in this diwali' />
        </NavLink>
        <Offers photo='./src/assets/pictures/pizza.jpeg' offer='diwali special' details='get 20% discount in this diwali' />
        <Offers photo='./src/assets/pictures/pizza.jpeg' offer='diwali special' details='get 20% discount in this diwali' />
        <Offers photo='./src/assets/pictures/pizza.jpeg' offer='diwali special' details='get 20% discount in this diwali' />
        <Offers photo='./src/assets/pictures/pizza.jpeg' offer='diwali special' details='get 20% discount in this diwali' />
        <Offers photo='./src/assets/pictures/pizza.jpeg' offer='diwali special' details='get 20% discount in this diwali' />
      </div>
      <Weekly ad='Weekly ad'/>
      <div className='mb-8'>
        <WeeklyadContainer />
      </div>
      <Heading head="Let's get grilling" />
      <div className='flex items-center justify-center gap-8 my-4'>
        <Grilling photo='./src/assets/pictures/dessert.jpg' details='eat dessert and be like hazzard' />
        <Grilling photo='./src/assets/pictures/dessert.jpg' details='eat dessert and be like hazzard' />
        <Grilling photo='./src/assets/pictures/dessert.jpg' details='eat dessert and be like hazzard' />
        <Grilling photo = './src/assets/pictures/britinia.jpg' detais='taste the new cake in the marker'/>
      </div>
      <div className='flex items-center justify-center gap-8 my-4 mx-20'>
        <div>
          <Dailies backgroundImage='./src/assets/pictures/dailies.jpg' text='Shop Dailies & save more on the items you buy the most' />
        </div>
        <div className='flex items-center justify-center'>
          <Offers photo='./src/assets/pictures/dailyfood.png' offer='daily items' details='get 20% discount on daily items' />
          <Offers photo='./src/assets/pictures/dailyfood.png' offer='daily items' details='get 20% discount on daily items' />
          <Offers photo='./src/assets/pictures/dailyfood.png' offer='daily items' details='get 20% discount on daily items' />
        </div>
      </div>
      <div className='w-full'>
        <Footer />
      </div>
      <Modal show={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)}>
        <Login />
      </Modal>
      <Modal show={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)}>
        <Signup/>
      </Modal>
    </div>
  );
}
