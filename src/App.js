import React from 'react';
import ProfGoLogo from './components/ProfGoLogo';
import Card from './components/Card';

function App() {
  return (
    <div className='w-full min-h-screen bg-black'>
      <ProfGoLogo/>
      <div className='Body flex flex-wrap justify-center'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        

      </div>
    </div>
  )
}

export default App
