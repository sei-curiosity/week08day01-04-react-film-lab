import React, {Component} from 'react';

class Fave extends Component{
    state = {
       
    }

    handleClick = (e) =>{
        e.stopPropagation();
        // let copyState = {...this.state};
        // copyState.isFave = !copyState.isFave
        // this.setState(copyState);
        this.props.onFaveToggle();
        console.log("handling Fave click!");
    }
    
    render(){
        const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue';
       
        return(
            <div onClick={this.handleClick} className={`film-row-fave ${isFave}`} >
  <p className="material-icons">{isFave}</p>
</div>
        );
    }


}

export default Fave;