import React from 'react';
import axios from 'axios';

import Comments from './comments';

export default class Post extends React.Component {
  constructor() {
    super();

    this.state = {
      post: {},
      comment: ''
    }
    this.postComment = this.postComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  postComment() {
    axios.post('/api/'+this.props.params.subredditId+'/'+this.props.params.postId+'/new', {
      comment: this.state.comment
    }).then((result) => {
      console.log(result.data)

      this.setState({
        post: result.data,
        comment: ''
      }, () => {console.log(this.state)});
    });
  }

  handleChange(event) {
    let text = event.target.value;
    this.setState({
      comment: text
    })
  }

  componentWillMount() {
    console.log('getting post');
    axios.get('/api/'+this.props.params.subredditId+'/'+this.props.params.postId)
      .then((post) => {
        console.log(post.data);
        this.setState({
          post: post.data
        })
      })
  }

  render() {
    return (
      <div>
        <div className="well">
          <h2>{this.state.post.title}</h2>
          <p>{this.state.post.content}</p>
        </div>
        <Comments
          comments={this.state.post.comments}
          comment={this.state.comment}
          handleChange={this.handleChange}
          postComment={this.postComment}
          />
      </div>
    )
  }
}
