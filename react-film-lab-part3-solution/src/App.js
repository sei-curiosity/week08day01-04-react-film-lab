import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FilmDetails from './components/FilmDetails';
import FilmListing from './components/FilmListing';
import TMDB from './TMDB';

class App extends React.Component {
  state = { 
    films: TMDB.films,
    faves: [],
    current: {}
   }

  handleFaveToggle = (film) =>{
    
    const faves = this.state.faves.slice(0, this.state.faves.length);
    const filmIndex = faves.indexOf(film);
    console.log("index: " + filmIndex);
    if(filmIndex >= 0){
        console.log("Removing " + film.title + " from faves...");
        faves.splice(filmIndex, 1);
    }

    else if(filmIndex === -1){
      console.log("Adding " + film.title + " to faves..."); 
      faves.push(film);
    }
    this.setState({faves});
  }

  handleDetailsClick = (film) =>{
    this.setState({current: film});
      console.log("Fetching details for " + film.title);
        }

  render() { 

    return ( <div className="App">
    <div className="film-library">
<FilmListing films={this.state.films} 
faves={this.state.faves} 
onFaveToggle={this.handleFaveToggle} 
onDetailsClick={this.handleDetailsClick}/>
<FilmDetails film={this.state.current}  />
</div>
  </div> );
  }
}
 
export default App;

