import React from 'react';
import './Card.css';

function Card({ name, punchline, photo_link, skills = [], courses = [] }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <div className="border-2 w-full h-full rounded-md border-green-500 flex flex-col items-center justify-center">
            <img src={photo_link} alt={name} className="prof-photo" />
            <div className="name">{name}</div>
            <div className="punchline">{punchline}</div>
          </div>
        </div>

        <div className="card-back">
          <div className="border-2 w-full h-full rounded-md bg-red-600 text-white flex flex-col items-center justify-center">
            <h3>Abilities</h3>
            <ul className="abilities">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <h3>Courses Taught</h3>
            <ul className="courses">
              {courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;


