import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quiz from './components/Quiz';
import { useState } from 'react';
import professors from './professors.json';
import { Routes, Route } from 'react-router-dom';
import Map from './components/Map';

function App() {

  const [profs, setProfs] = useState(JSON.parse(JSON.stringify(professors)));
  const [search, setSearch] = useState("");

  return (
    <div className='w-full min-h-screen bg-black'>
      <div>
        <Navbar search={search} setSearch={setSearch}/>
      </div>

      <Routes>
        <Route path='/' element={<Home search={search} profs={profs}/>}/>
        <Route path='/quiz' element={<Quiz profs={profs}/>}/>
        <Route path='/Map' element={<Map/>}/>
        
      </Routes>

    </div>
  )
}

export default App
