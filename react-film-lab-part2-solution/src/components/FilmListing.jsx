import React, { Component } from 'react';
import TMDB from '../TMDB';
import FilmRow from './FilmRow';

class FilmListing extends Component {
    state = { 
      filter: "all"
     }

    render() { 
        let allFilms = this.props.films;
        
        return ( 
          <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
        </div>
        <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
        </div>
    </div>

    {allFilms.map( (film, index) => 
         <FilmRow key={TMDB.films[index].id} 
         film={TMDB.films[index]}>{allFilms[index].title}</FilmRow>)}
</div>
      //     <div className="film-list">
      //   <h1 className="section-title">FILMS</h1>
      //   {allFilms.map( (film, index) => 
      //   <FilmRow key={TMDB.films[index].id} 
      //   film={TMDB.films[index]}>{allFilms[index].title}</FilmRow>)}
      // </div> );
        )}

    handleFilterClick = (filter) =>{
      console.log("setting filter to " + filter);
      let copyState = {...this.state};
      copyState.filter = filter;
      this.setState(copyState);
    }
}
 
export default FilmListing;