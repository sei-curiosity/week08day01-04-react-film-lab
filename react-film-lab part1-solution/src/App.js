import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilmDetails from './components/FilmDetails';
import FilmListing from './components/FilmListing';
import TMDB from './TMDB';

function App() {

  return (
    <div className="App">
      <div className="film-library">
 <FilmListing films={TMDB.films}/>

 <FilmDetails films={TMDB.films} />
</div>
    </div>
  );
}

export default App;
