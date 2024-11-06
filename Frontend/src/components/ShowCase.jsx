import React, { useEffect, useState } from 'react';

export default function ShowCase() {
  const images = [
    './src/assets/pictures/showcase.jpg',
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
    }, 2000); 

    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const adjustedIndex = currentImageIndex >= images.length ? 0 : currentImageIndex;



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
      <div className="flex flex-col lg:mt-50 mt-20 gap-10 absolute inset-0 flex items-center justify-center text-center">
        <h1 className="text-white font-bold text-4xl drop-shadow-lg">
          Find your needs on <br /> <span className='text-red-900'>𝓗𝓪𝓶𝓻𝓸 𝓜𝓪𝓻𝓽</span>
        </h1>
      </div>
    </div>
  );
}
