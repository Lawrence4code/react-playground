import React, { useState } from 'react';
import './App.css';
import useLocalStorage from './custom-hooks/useLocalStorage';

const App = () => {
  const [movies, setMovies, clearMovies] = useLocalStorage('movies');
  const [newMovie, setNewMovie] = useState('');

  const addMovie = (e) => {
    e.preventDefault();
    console.log({ movies, newMovie });
    setMovies((movies || []).concat(newMovie));
    setNewMovie('');
  };
  return (
    <main className="App">
      <h1> React Playground </h1>
      <form onSubmit={addMovie}>
        <input
          type="text"
          placeholder="add movies"
          onChange={(e) => setNewMovie(e.target.value)}
          value={newMovie}
        />
      </form>
      {/* <pre>{JSON.stringify(movies, null, 2)}</pre> */}
      <ul>
        {movies ? (
          movies.map((movie) => <li key={movie}> {movie}</li>)
        ) : (
          <small>No movies</small>
        )}
      </ul>
      <button onClick={clearMovies}> Remove all Movies </button>
    </main>
  );
};

export default App;
