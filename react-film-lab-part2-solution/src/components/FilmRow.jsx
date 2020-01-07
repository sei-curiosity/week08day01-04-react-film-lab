import React, { Component } from 'react';
import Poster from './Poster';
import TMDB from '../TMDB';
import Fave from './Fave';

class FilmRow extends Component {
    state = {  }

    handleDetailsClick = (film) =>{
console.log("Fetching details for " + film);
    }

    render() { 
        
        const filmDate = new Date(this.props.film.release_date);
        let year = filmDate.getFullYear();
        return ( 
            <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film.title)}>
            <Poster film={this.props.film}/>
          
            <div className="film-summary" >              
            <h1>{this.props.film.title}</h1>
              <p>{year}</p>
            </div>
            <Fave />
          </div>
        );
    }
}
 
export default FilmRow;