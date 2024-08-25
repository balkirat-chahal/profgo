import React, { useEffect, useState } from 'react';
import ProfGoLogo from './ProfGoLogo';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this file is correctly imported for custom styles

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
      <nav className="w-full flex flex-col">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center py-3 px-4 bg-black shadow-md custom-navbar">
          <ProfGoLogo />
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/quiz" 
              className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-green-800 font-bold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300 ease-in-out text-lg"
            >
              Take a Quiz!
            </Link>
            <Link 
              to="/Map" 
              className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300 ease-in-out text-lg"
            >
              Campus Map
            </Link>
          </div>
          {/* Search Bar */}
          <div className="w-full sm:w-auto">
            <SearchBar search={props.search} setSearch={props.setSearch} />
          </div>
        </div>
      </nav>
      {showNotification && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center py-2 transition-opacity duration-1000 ease-in-out opacity-100 custom-notification">
          Get to know your Profs in a flash!
        </div>
      )}
    </>
  );
}

export default Navbar;
