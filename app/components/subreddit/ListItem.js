import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ListItem extends Component {
	render() {
		let postPath = '/'+this.props.subredditId+'/'+this.props.id;
		const style = {
			color: 'black',
			listStyle: 'none'
		}
	
		return (
			<li style={style}>
				<div className="panel panel-default">
					<div className="panel-body">
						<Link style={style} to={postPath}><h2>{this.props.post.title}</h2></Link>
					</div>
				</div>
			</li>
		);
	}
}
