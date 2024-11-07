import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SinglePlayer = () => {
  const [selectedPlayer, setSelectedPlayer] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
 
  useEffect(() => {
    const getSinglePlayer = async () => {
      try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players/${id}`);
        const singlePlayerData = await response.json();
        
        setSelectedPlayer(singlePlayerData?.data?.player || {});
      } catch (error) {
        console.error("Error fetching single player:", error);
      }
    };

    getSinglePlayer();
  }, [id]);

  const deleteSinglePlayer = async () => {
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        navigate('/');
      }

    } catch (error) {
      console.error("Error deleting single player:", error);
    }
  };

  return (
    <>
      {selectedPlayer.imageUrl && (
        <img
          src={selectedPlayer.imageUrl}
          alt={`${selectedPlayer.name}'s adorable photo.`}
          height="350"
          width="250"
        />
      )}
      <h2>{selectedPlayer.name}</h2>
      <p>Breed: {selectedPlayer.breed}</p>
      <p>Status: {selectedPlayer.status}</p>

      <button 
      onClick={deleteSinglePlayer}>Delete Puppy Player</button>
    </>
  );
};

export default SinglePlayer;