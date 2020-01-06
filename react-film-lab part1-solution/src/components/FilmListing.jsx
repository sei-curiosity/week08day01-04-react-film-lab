import React, { Component } from 'react';
import TMDB from '../TMDB';
import FilmRow from './FilmRow';

class FilmListing extends Component {
    state = {  }
    render() { 
        let allFilms = this.props.films;
        
        return (  <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {allFilms.map( (film, index) => 
        <FilmRow key={TMDB.films[index].id} 
        film={TMDB.films[index]}>{allFilms[index].title}</FilmRow>)}
      </div> );
    }
}
 
export default FilmListing;