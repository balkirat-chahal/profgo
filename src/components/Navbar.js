import React from 'react';
import ProfGoLogo from './ProfGoLogo';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import './Navbar.css';

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
        pb-3'>

            <ProfGoLogo />
            <div className=''>
              <Link to='/quiz' className='text-xl text-green-600 ml-2 mr-2 animated-text'>Take a Quiz!</Link>
            </div>
            {/* Search Bar */}
            <SearchBar search={props.search} setSearch={props.setSearch}/>
        </div>
        <div>

        </div>
    </nav>
  )
}

export default Navbar
