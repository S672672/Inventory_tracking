import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ShowCase({setSearchQuery}) {
  const images = [
    './src/assets/pictures/bhatbhateni1.jpg',
    './src/assets/pictures/bhatbhateni.jpeg',
    './src/assets/pictures/dessert.jpg',
    './src/assets/pictures/dailyfood.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (images.length + 1));
      }
    }, 2000); // Change image every 3 seconds for a slower transition

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const adjustedIndex = currentImageIndex >= images.length ? 0 : currentImageIndex;

  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setSearchQuery(e.target.value);
  }

  return (
    <div
      className="lg:w-2/3 md:w-3/4 sm:w-full bg-gray-400 rounded-md m-5 cursor-pointer"
      style={{ height: '600px', position: 'relative', overflow: 'hidden' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="slideshow-container"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: `${(index - adjustedIndex) * 100}%`, 
              width: '100%',
              height: '100%',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'left 1.5s ease-in-out', 
            }}
          ></div>
        ))}
      </div>
      <div className="flex flex-col lg:mt-80 mt-20 gap-10 absolute inset-0 flex items-center justify-center text-center">
        <h1 className="text-yellow-300 font-bold text-4xl drop-shadow-lg">
          Find your needs on <br /> Our own mart
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:mx-10 mx-5">
          <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
            className="w-full lg:w-96 h-16 lg:ml-0 ml-5 rounded-xl flex items-center justify-center pl-5"
            type="text"
            placeholder="Enter the product you want"
          />
          <button className="bg-yellow-400 hover:bg-orange-500 text-black font-bold py-3 px-6 rounded-full text-lg mt-5 lg:mt-0" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
