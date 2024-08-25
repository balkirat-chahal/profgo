import React from 'react';
import ProfGoLogo from './ProfGoLogo';
import SearchBar from './SearchBar';

function Navbar(props) {
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
        '>

            <ProfGoLogo />
            {/* Search Bar */}
            <SearchBar search={props.search} setSearch={props.setSearch}/>
        </div>
        <div>

        </div>
    </nav>
  )
}

export default Navbar
