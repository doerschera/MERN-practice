import React from 'react';
import axios from 'axios';

export default class Post extends React.Component {
  constructor() {
    super();

    this.state = {
      post: []
    }
  }

  componentWillMount() {
    console.log('getting post');
    axios.get('/api/'+this.props.params.subredditId+'/'+this.props.params.postId)
      .then((post) => {
        console.log(post);
        this.setState({
          post: post.data
        })
      })
  }

  render() {
    return (
      <h1>This is a post</h1>
    )
  }
}
