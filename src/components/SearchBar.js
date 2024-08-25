import React from 'react';
import { useState } from 'react';
import Search from '@mui/icons-material/Search';

function SearchBar() {

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-row justify-center items-center'>
        <input type='text' value={search} onChange={handleChange} className='
        bg-gray-600
        rounded-lg
        text-base
        w-full
        mt-5
        p-1
        text-white
        ' />
        <button type='submit' className='text-white mt-5 ml-2'><Search className='text-lg'/></button>
    </form>
  )
}

export default SearchBar
