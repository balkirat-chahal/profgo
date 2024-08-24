import React from 'react';
import { useState } from 'react';

function SearchBar() {

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }


  return (
    <form>
        <input type='text' value={search} onChange={handleChange} className='' />
        <button>Search</button>
    </form>
  )
}

export default SearchBar
