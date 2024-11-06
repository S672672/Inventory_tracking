// src/pages/Home.js
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShopByCategory from '../components/Category';
import ProductList from './ProductList';
import ShowCase from '../components/ShowCase';
import BirthdayOfferCard from '../components/BirthdayOffer';
import FlashSaleCard from '../components/FlashSales';
import Offerheading from '../components/Offerheading';
import BrowseCategoriesCard from '../components/CategoryCard';
const Home = () => {
  return (
    <div className='container mx-auto flex flex-col items-center'>
    <ShowCase />
      <ProductList />
      <FlashSaleCard />
      <BrowseCategoriesCard image='./src/assets/pictures/bhatbhateni1.jpg' title='"Browse our selection and add your favorite groceries to your cart for easy in-store pickup."' />
      <Offerheading heading = 'Sweet Birthday Cake Deals for You' />
      <BirthdayOfferCard />
    </div>
  );
};

export default Home;
