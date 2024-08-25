import React, { useEffect, useState } from 'react';
import ProfGoLogo from './ProfGoLogo';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 1200); 

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <nav className='
        w-full
        flex
        flex-col
      '>
        <div className='
          w-full
          justify-around
          flex
          flex-row
          items-center
          pb-3
        '>
          <ProfGoLogo />
          <div className='hi'>
            <Link to='/quiz' className='text-xl text-green-600 ml-2 mr-2 animated-text'>Take a Quiz!</Link>
          </div>
          <div>
            <Link to='/Map' className='text-xl text-green-600 ml-2 mr-2 animated-text'>Campus Map</Link>
          </div>
          {/* Search Bar */}
          <SearchBar search={props.search} setSearch={props.setSearch}/>
        </div>
      </nav>
      <div className={`notification ${showNotification ? 'show' : 'fade-out'}`}>
        Get to know your Profs in a flash!
      </div>
    </>
  );
}

export default Navbar;

