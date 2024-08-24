import React from 'react'
import { Avatar } from '@mui/material'
import pokiball from '../assets/pokiball.png'
function Card() {
  return (
    <div className='border-2 w-56 h-72 rounded-md m-5 mb-20 mt-10 mr-10'>
      <div className='p-2 h-40 w-36'>
      <img src={pokiball} alt="Girl in a jacket" width="300" height="600"/>
      </div>

    </div>
  )
}

export default Card
