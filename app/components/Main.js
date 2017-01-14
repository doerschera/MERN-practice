import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
	render() {
		const style = {
			color: 'black'
		}
		const footerStyle = {
			height: 100
		}
		return (
			<div className="container">
	      <div className="jumbotron">
	        <h2><strong>Reddit!</strong></h2>
	      </div>
				<ul className="nav nav-pills">
					<li><Link style={style} to="austin">AUSTIN</Link></li>
					<li><Link style={style} to="chicago">CHICAGO</Link></li>
				</ul>
	      <div className="row">
	        {this.props.children}
	      </div>
				<footer style={footerStyle}></footer>
	    </div>
		);
	}
}
