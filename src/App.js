import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { useState } from 'react';
import professors from './professors.json';

function App() {

  const [profs, setProfs] = useState(JSON.parse(JSON.stringify(professors)));
  const [search, setSearch] = useState("");

  return (
    <div className='w-full min-h-screen bg-black'>
      <div>
        <Navbar search={search} setSearch={setSearch}/>
      </div>
    
      <div className='Body flex flex-wrap justify-center'>
        {
          profs.filter(prof => prof.name.toLowerCase().includes(search.toLowerCase()))
          .map( (prof, index) => {
            return <Card 
            name={prof.name}
            punchline={prof.punchline}
            photo_link={prof.photo_link}
            courses={prof.courses}
            skills={prof.skills}
            />
          })
        }
      </div>
    </div>
  )
}

export default App
