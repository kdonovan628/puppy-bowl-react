import { useState } from 'react';
import { Link } from 'react-router-dom'
 
const NavBar = ({ setSearchQuery }) => {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
   <nav id="navbar">
      <Link to="/">Home</Link>
      <Link to="/newplayer">Add New Player</Link>

      {/* Search Bar */}
      <input 
        type="text" 
        placeholder="Search for a puppy..." 
        onChange={handleSearchChange} 
      />
    </nav>
  );
};

export default NavBar;