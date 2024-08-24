import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div className='w-full min-h-screen bg-black'>
      <div>
        <Navbar />
      </div>
    
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
