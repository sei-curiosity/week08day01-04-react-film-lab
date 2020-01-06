import React, { Component } from 'react';
import Poster from './Poster';
import TMDB from '../TMDB';

class FilmRow extends Component {
    state = {  }
    render() { 
        
        const filmDate = new Date(this.props.film.release_date);
        let year = filmDate.getFullYear();
        return ( 
            <div className="film-row">
            <Poster film={this.props.film}/>
          
            <div className="film-summary">
              <h1>{this.props.film.title}</h1>
              <p>{year}</p>
            </div>
          </div>
        );
    }
}
 
export default FilmRow;