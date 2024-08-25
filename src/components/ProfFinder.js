import React from 'react';

function ProfFinder({ name, punchline, photo_link, skills = [], courses = [], attempts }) {
  return (
    <div className="m-4 mb-10  ml-auto mr-auto border p-4 border-green-500 rounded-md w-3/12">
      <div className="">
        <div className="flex flex-col items-center justify-center">
          { attempts <= 0 && <img src={photo_link} alt={name} className="prof-photo w-32 h-32 rounded-full border-2 border-white mb-2" />}
          { attempts <= 0 &&<div className="name text-white text-xl font-bold mb-1">{name}</div>}
          { attempts <=3 && <div className="punchline text-white text-sm italic text-center">{punchline}</div>}
        </div>

        { attempts <= 2 && <div className="p-2 flex flex-col items-center justify-center border-2  text-white">
          <div className="content overflow-auto w-full h-full">
          { attempts <= 2 && <>
            <h3 className='text-yellow-400 text-lg font-semibold mb-2'>Abilities</h3>
            <ul className="list-disc list-inside mb-2">
              {skills.map((skill, index) => (
                <li key={index} className="mb-1">{skill}</li>
              ))}
            </ul>
            </>}
            { attempts <= 1 && <>
            <h3 className='text-yellow-400 text-lg font-semibold mb-2'>Courses Taught</h3>
            <ul className="list-disc list-inside">
              {courses.map((course, index) => (
                <li key={index} className="mb-1">{course}</li>
              ))}
            </ul>
            </>}
          </div>
        </div>}
      </div>
    </div>
  );
}

export default ProfFinder;
