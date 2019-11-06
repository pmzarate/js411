import React, { Component } from 'react';

class Details extends Component {
    constructor(props) {
        super(props)
			this.state = {isHidden : true,
						   detailInfo : []};
			this.handleClick= this.handleClick.bind(this);				
			}
		

    handleClick(event)  {
    	this.setState ({
	    	isHidden : !this.state.isHidden});
	}
	
	render () {
		// const {isHidden, detailInfo} = this.state;
		let buttonText = this.state.isHidden ? 'Show Details' : 'Hide Details';
		return (
			<div>
			<button onClick={this.handleClick} className="like">
          {buttonText}</button>
		  <p>{person.location.city}</p>
		  </div>
		)
	}
}


export default Details
