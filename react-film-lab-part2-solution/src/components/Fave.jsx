import React, {Component} from 'react';

class Fave extends Component{
    state = {
        isFave: false
    }

    handleClick = (e) =>{
        e.stopPropagation();
        let copyState = {...this.state};
        copyState.isFave = !copyState.isFave
        this.setState(copyState);
        console.log("handling Fave click!");
    }
    render(){
        const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue';
       
        return(
            <div onClick={this.handleClick} className={`film-row-fave ${isFave}`} >
  <p className="material-icons">{isFave}</p>
</div>
        );
    }


}

export default Fave;