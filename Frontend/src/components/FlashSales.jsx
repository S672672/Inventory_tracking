import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FlashSaleCard() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // Timer function to update countdown
  useEffect(() => {
    const countdownDate = new Date().setHours(new Date().getHours() + 12);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      setTimeLeft({
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
      if (distance < 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <p className='text-4xl font-extrabold text-gray-600 mb-2 font-serif tracking-tight mb-10'>Time Limited Offer</p>
      <div className="relative w-[50vw] h-[50vh] rounded-3xl p-8 text-center bg-gradient-to-br from-red-500 to-red-700 shadow-lg transform transition-transform duration-500 hover:scale-105 flex flex-col justify-between overflow-hidden animate-float">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full opacity-20 animate-ping"></div>
        {/* Animated Bubbles */}
        <div className="absolute inset-0">
          <div className="bubbles">
            {/* Add more bubbles */}
            <div className="bubble bubble-1"></div>
            <div className="bubble bubble-2"></div>
            <div className="bubble bubble-3"></div>
            <div className="bubble bubble-4"></div>
            <div className="bubble bubble-5"></div>
            <div className="bubble bubble-6"></div>
            <div className="bubble bubble-7"></div>
            <div className="bubble bubble-8"></div>
            <div className="bubble bubble-9"></div>
            <div className="bubble bubble-10"></div>
            <div className="bubble bubble-11"></div>
            <div className="bubble bubble-12"></div>
            <div className="bubble bubble-13"></div>
            <div className="bubble bubble-14"></div>
            <div className="bubble bubble-15"></div>
          </div>
        </div>

        {/* Flash Sale Content */}
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold text-white mb-2 font-serif tracking-tight animate-bounceIn">
             Special Sale on Delicacies
          </h2>
          <p className="text-lg text-white mb-4 font-semibold animate-bounceIn delay-200">Indulge in Limited-Time Offers and Sweet Treats!</p>
        </div>
        
        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 mb-4 z-10">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="p-2 bg-red-200 border-2 border-red-300 rounded-lg shadow-lg transform transition-transform duration-300 animate-bounce hover:scale-105">
              <span className="text-4xl font-bold text-red-600">{value}</span>
              <span className="text-sm block mt-1 font-medium capitalize">{unit}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center z-10">
          <Link
            to="/products"
            className="relative bg-white text-red-600 py-1 px-4 w-48 rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:bg-red-100 hover:shadow-2xl"
          >
            <span className="relative z-10 text-lg font-bold">Browse Now</span>
            <div className="absolute inset-0 bg-red-500 opacity-30 transform scale-0 transition-transform duration-300 hover:scale-100" />
          </Link>
        </div>
      </div>

      {/* CSS for Bubbles */}
      <style jsx>{`
        .bubbles {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .bubble {
          position: absolute;
          bottom: -100px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          opacity: 0.5;
          animation: rise 6s infinite;
        }
        .bubble-1 {
          width: 40px;
          height: 40px;
          left: 20%;
          animation-delay: 0s;
        }
        .bubble-2 {
          width: 60px;
          height: 60px;
          left: 50%;
          animation-delay: 1s;
        }
        .bubble-3 {
          width: 30px;
          height: 30px;
          left: 80%;
          animation-delay: 2s;
        }
        .bubble-4 {
          width: 50px;
          height: 50px;
          left: 10%;
          animation-delay: 3s;
        }
        .bubble-5 {
          width: 35px;
          height: 35px;
          left: 25%;
          animation-delay: 0.5s;
        }
        .bubble-6 {
          width: 55px;
          height: 55px;
          left: 65%;
          animation-delay: 1.5s;
        }
        .bubble-7 {
          width: 45px;
          height: 45px;
          left: 75%;
          animation-delay: 2.5s;
        }
        .bubble-8 {
          width: 70px;
          height: 70px;
          left: 15%;
          animation-delay: 3.5s;
        }
        .bubble-9 {
          width: 25px;
          height: 25px;
          left: 40%;
          animation-delay: 4.5s;
        }
        .bubble-10 {
          width: 35px;
          height: 35px;
          left: 25%;
          animation-delay: 0.5s;
        }
        .bubble-11 {
          width: 55px;
          height: 55px;
          left: 65%;
          animation-delay: 1.5s;
        }
        .bubble-12 {
          width: 45px;
          height: 45px;
          left: 75%;
          animation-delay: 2.5s;
        }
        .bubble-13 {
          width: 70px;
          height: 70px;
          left: 15%;
          animation-delay: 3.5s;
        }
        .bubble-14 {
          width: 25px;
          height: 25px;
          left: 40%;
          animation-delay: 4.5s;
        }
        .bubble-15 {
          width: 25px;
          height: 25px;
          left: 40%;
          animation-delay: 4.5s;
        }
        @keyframes rise {
          0% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-500px);
            opacity: 0;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-bounceIn {
          animation: bounceIn 0.6s forwards;
        }
        .animate-bounceIn.delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}
