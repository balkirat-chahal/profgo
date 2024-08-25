import React from 'react';
import Card from './Card';

function Home(props) {
  return (
    <div className='Body flex flex-wrap justify-center'>
        {
          props.profs.filter(prof => prof.name.toLowerCase().includes(props.search.toLowerCase()))
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
  )
}

export default Home
