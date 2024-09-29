import React, { useState,useEffect } from 'react';
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
import { NavLink, Outlet } from 'react-router-dom';
import ConfirmSignin from './ConfirmSignin';

export default function LandingPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodeToken = (token) => {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload;
      };
      
      const userInfo = decodeToken(token);
      setIsLoggedIn(true);
      setName(userInfo.name);
    }
  }, []);

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setName(name);
    setIsLoginModalOpen(false);
  };
  
  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   setName('');
  // };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  

  return (
    <div className='flex flex-col'>
      <Navout 
        isLoggedIn={isLoggedIn}
        name={name}
        onLoginClick={() => setIsLoginModalOpen(true)} 
        onSignupClick={() => setIsSignupModalOpen(true)}
        onLogoutClick={handleLogout}
      />
      <div className='flex items-center justify-center'>
        <Advert />
      </div>
      <Heading head='Make your shopping easy' />
      <div className='flex items-center justify-center m-2 gap-4'>
        <NavLink to='/offers'>
          <Offers photo='./src/assets/pictures/pizza.jpeg' offer='diwali special' details='get 20% discount in this diwali' />
        </NavLink>
        <Offers photo='./src/assets/pictures/pizza.jpeg' offer='diwali special' details='get 20% discount in this diwali' />
        {/* Other Offers */}
      </div>
      <Weekly ad='Weekly ad' />
      <div className='mb-8'>
        <WeeklyadContainer />
      </div>
      <Heading head="Let's get grilling" />
      <div className='flex items-center justify-center gap-8 my-4'>
        <Grilling photo='./src/assets/pictures/dessert.jpg' details='eat dessert and be like hazzard' />
        {/* Other Grilling */}
      </div>
      <div className='flex items-center justify-center gap-8 my-4 mx-20'>
        <div>
          <Dailies backgroundImage='./src/assets/pictures/dailies.jpg' text='Shop Dailies & save more on the items you buy the most' />
        </div>
        <div className='flex items-center justify-center'>
          <Offers photo='./src/assets/pictures/dailyfood.png' offer='daily items' details='get 20% discount on daily items' />
          {/* Other Daily Offers */}
        </div>
      </div>
      <div className='w-full'>
        <Footer />
      </div>

      {/* Login Modal */}
      <Modal show={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)}>
        <Login onLogin={handleLogin} />
      </Modal>
      
      {/* Signup Modal */}
      <Modal show={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)}>
        <ConfirmSignin />
      </Modal>
      <Outlet />
    </div>

  );
}
