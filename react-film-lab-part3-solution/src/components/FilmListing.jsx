import React, { Component } from 'react';
import TMDB from '../TMDB';
import FilmRow from './FilmRow';

class FilmListing extends Component {
    state = { 
      filter: "all"
     }

     handleDetailsClick = (film) =>{
      console.log("Fetching details for " + film);
      this.props.handleDetailsClick();
          }

    render() { 
      let allFilms = [];
      // console.log(this.state.filter);
      if(this.state.filter == "all"){
        
        allFilms = this.props.films.map((film) => {
          return (
          <FilmRow
          film={film}
          key={film.id}
          onFaveToggle={() => this.props.onFaveToggle(film)} 
          isFave={this.props.faves.includes(film)} 
          onDetailsClick={() => this.props.onDetailsClick(film)}
          />
        )})}

        else if(this.state.filter == "faves"){
          
          allFilms = this.props.faves.map((film) => {
            return (
            <FilmRow
            film={film}
            key={film.id}
            onFaveToggle={() => this.props.onFaveToggle(film)} 
            isFave={this.props.faves.includes(film)} 
            onDetailsClick={() => this.props.onDetailsClick(film)}
            />
          )})
        }


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
            <span className="section-count">{this.props.faves.length}</span>
        </div>
    </div>
    {allFilms}
</div>

        )}

    handleFilterClick = (filter) =>{
      console.log("setting filter to " + filter);
      let copyState = {...this.state};
      copyState.filter = filter;
      this.setState(copyState);
    }
}
 
export default FilmListing;