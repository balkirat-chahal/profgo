import React from 'react';
import pokiball from '../assets/pokiball.png';
import '../App.css'; 
import { Link } from 'react-router-dom';

const ProfGoLogo = () => {
  return (
    <Link to='/'>
      <div className="flex flex-col items-center bg-none">
        <h1 className="text-4xl font-bold text-green-500 flex items-center">
          Prof<span className="OG text-yellow-500">G</span>
          <span className="inline-block mx-2 relative">
            <img src={pokiball} alt="Pokéball" className="w-12 h-12 animate-spin-slow" />
          </span>
        </h1>
        <div className="text-sm text-white ">
         Know your profs—quick and easy!
        </div>
      </div>
    </Link>
  );
};

export default ProfGoLogo;

