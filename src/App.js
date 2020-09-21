import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [info, setInfo] = useState(null);

  const getCharacters = async () => {
    const data = await fetch(
      'https://rickandmortyapi.com/api/character/?page=1'
    );
    const characters = await data.json();
    return characters.results;
  };

  const getCharacter = async (id) => {
    if (id) {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const character = await data.json();
      return character;
    }
  };

  useEffect(() => {
    getCharacters().then((res) => setCharacters(res));
  }, []);

  useEffect(() => {
    getCharacter(openId).then((res) => {
      setInfo(res);
    });
  }, [openId]);

  return (
    <div className="App">
      <h1> Rick and Morty Characters </h1>
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {characters.map((character) => (
          <li
            key={character.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '10px auto',
            }}
          >
            <img src={character.image} alt={character.name} />
            {character.name}
            {openId === character.id && info ? (
              <div>
                <div> Status: {info.status}</div>
                <div> Species: {info.species}</div>
              </div>
            ) : null}
            <button onClick={() => setOpenId(character.id)}> More Info </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
