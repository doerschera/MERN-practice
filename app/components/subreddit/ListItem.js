import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ListItem extends Component {
	render() {
		let postPath = '/'+this.props.subredditId+'/'+this.props.id;
		return (
			<li>
				<Link to={postPath}><h2>{this.props.post.title}</h2></Link>
				<p>{this.props.post.content}</p>
			</li>
		);
	}
}
