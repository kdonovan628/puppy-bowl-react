// fetch the data from the api 
// display the data on the page for all puppy players
// create a button that allows a user to see details about a puppy 
// create a form that allows a user to create a new puppy
// create a search bar that allows users to find a specific puppy by name 
// create a button that allows users to delete a player 

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';
import NavBar from './components/NavBar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <NavBar setSearchQuery={setSearchQuery} />
      
      <Routes>
        <Route path="/" element={<AllPlayers searchQuery={searchQuery} />} />
        <Route path="/newplayer" element={<NewPlayerForm />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </>
  );
};

export default App;