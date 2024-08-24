import React from 'react';
import pokiball from './assets/pokiball.png';
import osmar from './assets/osmar.jpg';
import './App.css'; // Import the custom CSS for spinning animation

const ProfGoLogo = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-none">
      <h1 className="text-4xl font-bold text-green-500 flex items-center">
        Prof<span className="OG text-yellow-500 mr-0">G</span>
        <span className="inline-block mx-2 relative ml-0 pl-0">
          <img src={pokiball} alt="Pokéball" className=" poki w-12 h-12 animate-spin-slow pl-0" />
        </span>
      </h1>
    </div>
  );
};


export default ProfGoLogo;
