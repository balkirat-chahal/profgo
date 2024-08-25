import React from 'react';
import pokiball from '../assets/pokiball.png';
import './Card.css'

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front p-10">
          <div className="border-2 w-full h-full rounded-md">
            <div className="flex border-b-2 h-32">
              <div className="p-2 h-40 w-36">
                <img src={pokiball} alt="pokiball" width="100" height="100" className="border-2" />
              </div>
              <div className="text-white pt-10">Osmar Zaine</div>
            </div>
                
          </div>
        </div>

        <div className="card-back">
          <div className="border-2 w-full h-full rounded-md bg-red-600 text-white flex items-center justify-center">
            Back of the Card
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

