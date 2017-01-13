import React, { Component } from 'react';

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
		return (
			<div>
				<div className="page-header">
					<h1 style={style}>{this.props.params.subredditId}</h1>
				</div>
					<ul>
						{this.state.posts.map(post => <ListItem key={post._id} post={post} id={post._id} subredditId={post.subredditId}/>)}
					</ul>
			</div>
		);
	}
}
