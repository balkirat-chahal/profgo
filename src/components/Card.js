import React from 'react'
import pokiball from '../assets/pokiball.png'
function Card() {
  return (
    <div className='border-2 w-56 h-72 rounded-md m-5 mb-20 mt-10 mr-10'>
        <div className='flex border-2 h-32'>
      <div className='p-2 h-40 w-36'>
      <img src={pokiball} alt="pokiball" width="100" height="100" className='border-2'/>
      </div>
        <div className='text-white pt-10'>Osmar Zaine</div>
        </div>
        <div className='text-white'>

            hi
        </div>
    </div>
  )
}

export default Card
