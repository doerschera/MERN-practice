import React, { Component } from 'react';

export default class Main extends Component {
	render() {
		return (
			<div className="container">
	      <div className="jumbotron">
	        <h2><strong>Reddit!</strong></h2>
	      </div>

	      <div className="row">
	        {this.props.children}
	      </div>
	    </div>
		);
	}
}
