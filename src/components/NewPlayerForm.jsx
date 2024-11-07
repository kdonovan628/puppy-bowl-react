import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlayerStatus = {
  FIELD: "field",
  BENCH: "bench"
};

const NewPlayerForm = () => {
  const [inputName, setInputName] = useState('');
  const [inputBreed, setInputBreed] = useState('');
  const [inputImageUrl, setInputImageUrl] = useState('');
  const [status, setStatus] = useState(PlayerStatus.BENCH);
  
  const navigate = useNavigate();

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const addPlayer = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players', {
        method: 'POST',
        body: JSON.stringify({
          name: inputName,
          breed: inputBreed,
          status,
          imageUrl: inputImageUrl,
        }),
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (response.ok) {
        navigate("/");
      } else {
        console.error("Failed to add player:", response);
      }
    } catch (error) {
      console.error("Error adding player:", error);
    }
  };

  return (
    <form id="new-player-form" onSubmit={addPlayer}>
      <input 
        placeholder="name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <input 
        placeholder="breed"
        value={inputBreed}
        onChange={(e) => setInputBreed(e.target.value)}
      />
      <label>
        Status:
        <select value={status} onChange={handleStatusChange}>
          <option value={PlayerStatus.FIELD}>Field</option>
          <option value={PlayerStatus.BENCH}>Bench</option>
        </select>
      </label>
      <input 
        placeholder="imageUrl"
        value={inputImageUrl}
        onChange={(e) => setInputImageUrl(e.target.value)}
      />
      <button type="submit">Add Puppy Player</button>
    </form>
  );
}

export default NewPlayerForm;