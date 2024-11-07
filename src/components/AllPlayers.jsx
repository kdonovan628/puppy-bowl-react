import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AllPlayers = ({ searchQuery }) => {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players');
        const playerData = await response.json();
        setPlayers(playerData?.data?.players || []);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    getPlayers();
  }, []);

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1>Puppy Bowl Players</h1>

      <section id="all-puppies">
        {filteredPlayers.map((player) => (
          <section
            onClick={() => { navigate(`/players/${player.id}`); }}
            key={player.id}
          >
            <h2>{player.name}</h2>
            <img
              src={player.imageUrl}
              alt={`${player.name}'s adorable photo.`}
              height="350"
              width="250"
            />
          </section>
        ))}
      </section>
    </>
  );
};

export default AllPlayers;