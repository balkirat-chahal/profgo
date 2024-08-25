import React from 'react';
import './Card.css';

function Card({ name, punchline, photo_link, skills = [], courses = [] }) {
  return (
    <div className="card-container m-4">
      <div className="card">
        <div className="card-front flex flex-col items-center justify-center border-2 border-green-500 rounded-md">
          <img src={photo_link} alt={name} className="prof-photo w-24 h-24 rounded-full border-2 border-white mb-2" />
          <div className="name text-white text-xl font-bold mb-1">{name}</div>
          <div className="punchline text-white text-sm italic text-center">{punchline}</div>
        </div>

        <div className="card-back p-2 flex flex-col items-center justify-center border-2 border-green-500 rounded-md bg-green-600 text-white">
          <div className="content overflow-auto w-full h-full">
            <h3 className='text-yellow-400 text-lg font-semibold mb-2'>Abilities</h3>
            <ul className="abilities list-disc list-inside mb-2">
              {skills.map((skill, index) => (
                <li key={index} className="mb-1">{skill}</li>
              ))}
            </ul>
            <h3 className='text-yellow-400 text-lg font-semibold mb-2'>Courses Taught</h3>
            <ul className="courses list-disc list-inside">
              {courses.map((course, index) => (
                <li key={index} className="mb-1">{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
