import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { useState } from 'react';

function App() {

  const [profs, setProfs] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div className='w-full min-h-screen bg-black'>
      <div>
        <Navbar search={search} setSearch={setSearch}/>
      </div>
    
      <div className='Body flex flex-wrap justify-center'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {console.log(search)}
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
