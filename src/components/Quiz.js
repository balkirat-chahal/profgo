import React from 'react';
import { useState } from 'react';
import ProfFinder from './ProfFinder';

function Quiz(props) {


    const getRandomProf = () => {
        const randomIndex = Math.floor(Math.random() * props.profs.length);
        return props.profs[randomIndex];
      }

    const reset = () => {
        setProf(getRandomProf);
        setAttempts(3);
        setWin(0);
        setGuess("");
    }

    const [guess, setGuess] = useState("");
    const [prof, setProf] = useState(getRandomProf())
    const [attempts, setAttempts] = useState(3);
    const [win, setWin] = useState(0);

    const handleChange = e => setGuess(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(attempts > 0 && guess.toLowerCase() == prof.name.toLowerCase()){
            setWin(1)
            setAttempts(0)
        }
        else if(attempts <= 0){
            setWin(2)
        }
        else if(attempts > 0){
            setAttempts(attempts - 1);
        }
        setGuess("");
    }

      

  return (
    <div className='
    ml-auto
    mr-auto
    min-h-screen
    items-center
    justify-center
    flex
    flex-col
    border
    border-white
    '>
        <h2 className='text-xl text-green-600 ml-auto mr-auto'>Guess the Prof</h2>
        { win < 2 && attempts != 0 && <h2 className='text-xl text-white ml-auto mr-auto'>Attempts Left: {attempts}</h2>}
        { win == 1 && <h2 className='text-xl text-green-600 ml-auto mr-auto'>You're Correct! The Prof is:</h2>}
        {win == 2 && <h2 className='text-xl text-white ml-auto mr-auto'>The Prof is: </h2>}
        <button onClick={reset} className='p-2 text-xl text-white bg-green-600 rounded-lg hover:cursor-pointer'>Get New!</button>

      <div className='w-full items-center justify-center ml-auto mr-auto'>
        <ProfFinder name={prof.name} punchline={prof.punchline} photo_link={prof.photo_link} skills={prof.skills} courses={prof.courses} attempts={attempts}/>
      </div>

      
      <form onSubmit={handleSubmit} className='
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
