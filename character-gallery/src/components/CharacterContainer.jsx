import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';

const CharacterContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const baseURL = 'https://rickandmortyapi.com/api/character/';

  const fetchCharacters = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.results; 
    } catch (error) {
      console.error('Error fetching data:', error);
      return []; 
    }
  };

  useEffect(() => {
    const generateAllCharacters = async () => {
      const data = await fetchCharacters(baseURL);
      setCharacters(data);
    };
    generateAllCharacters();
  }, []);

  const getCharacterByName = async (event) => {
    setSearchTerm(event.target.value);
    const url = event.target.value ? `${baseURL}?name=${event.target.value}` : baseURL;
    const data = await fetchCharacters(url);
    setCharacters(data);
  };

  return (
    <main>
      <input
        type="text"
        value={searchTerm}
        onChange={getCharacterByName}
        placeholder="Search by name"
        className="finder-character"
      />
      <div className="containerCards">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </main>
  );
};

export default CharacterContainer;
