import React from 'react';
import ProfGoLogo from './ProfGoLogo';
import SearchBar from './SearchBar';

function Navbar() {
  return (
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
        pb-3'>

            <ProfGoLogo />
            {/* Search Bar */}
            <SearchBar/>
        </div>
        <div>

        </div>
    </nav>
  )
}

export default Navbar
