import { Card } from '@mui/material';
import React from 'react'
import { useState } from 'react'

function Quiz(props) {

    const [guess, setGuess] = useState("");

    const handleChange = e => setGuess(e.target.value)

  return (
    <div className='
    ml-auto
    mr-auto
    min-h-screen
    items-center
    flex
    flex-col
    border
    border-white
    '>
      <div>
        <p>Hello</p>
      </div>
      
      <form className='
      flex
      flex-row
      justiy-center
      bottom-5
      absolute
      w-2/5
      '>
        <input type='text' value={guess} onChange={handleChange} className='
        bg-gray-600
        h-10
        text-xl
        w-full
        rounded-lg
        text-white
        '/>
      </form>
    </div>
  )
}

export default Quiz
