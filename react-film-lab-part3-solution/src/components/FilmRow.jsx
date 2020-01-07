import React, { Component } from 'react';
import Poster from './Poster';
import TMDB from '../TMDB';
import Fave from './Fave';

class FilmRow extends Component {
    state = { 
      film: {}
     }

    handleClick = (e) =>{
      // e.stopPropagation();
      // let copyState = {...this.state};
      // copyState.isFave = !copyState.isFave
      // this.setState(copyState);
      this.setState({state: this.props.film})
      this.props.onDetailsClick(this.props.film);
      console.log("handling Details click!");
  }


    render() { 
        
        const filmDate = new Date(this.props.film.release_date);
        let year = filmDate.getFullYear();
        return ( 
            <div className="film-row" onClick={this.handleClick}>
            <Poster film={this.props.film}/>
          
            <div className="film-summary" >              
            <h1>{this.props.film.title}</h1>
              <p>{year}</p>
            </div>
            <Fave onFaveToggle={this.props.onFaveToggle} />
          </div>
        );
    }
}
 
export default FilmRow;