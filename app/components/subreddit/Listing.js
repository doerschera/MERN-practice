import React, { Component } from 'react';
import { Link } from 'react-router';

import axios from 'axios';
import ListItem from './ListItem';

export default class Listing extends Component {
	constructor() {
		super();

		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		axios.get('/api/' + this.props.params.subredditId).then(posts => {
			this.setState({ posts: posts.data });
		});
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.params.subredditId !== nextProps.params.subredditId) {
			axios.get('/api/' + nextProps.params.subredditId).then(posts => {
				this.setState({ posts: posts.data });
			});
		}
	}

	render() {
		const style = {
			textTransform: 'uppercase'
		}
		const buttonStyle = {
			color: 'white',
			fontSize: 20,
		}
		return (
			<div>
				<div className="page-header">
					<h1 style={style}>{this.props.params.subredditId}</h1>
				</div>
					<ul>
						{this.state.posts.map(post => <ListItem key={post._id} post={post} id={post._id} subredditId={post.subredditId}/>)}
					</ul>
					<button className="btn btn-info"><Link to={this.props.params.subredditId + '/new'} style={buttonStyle}>Add Post</Link></button>
			</div>
		);
	}
}
