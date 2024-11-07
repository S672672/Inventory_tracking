import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleBack} className='bg-green-600 w-24 p-2 text-white font-bold rounded-lg mx-10 my-4'>
       ← Go Back
    </button>
  );
};

export default BackButton;
