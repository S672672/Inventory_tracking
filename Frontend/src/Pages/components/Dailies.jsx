import React from "react";

export default function Dailies({ backgroundImage, text }) {
  return (
    <div
      className="flex items-center justify-center w-96 h-96 bg-cover bg-center rounded-lg shadow-lg relative m-4 ml-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <div className="font-bold text-black text-3xl">Dailies</div>
        <p className="text-black text-lg m-3">{text}</p>
        <button className="mt-4 px-4 py-2 bg-white text-black bg-opacity-70 rounded-xl hover:bg-opacity-90 transition duration-300 hover:text-red-400 border border-black hover:border-red-400">
          shop now
        </button>
      </div>
    </div>
  );
}
