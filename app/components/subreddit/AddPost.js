import React from 'react';
import axios from 'axios';

export default class AddPost extends React.Component {

  constructor() {
    super();

    this.state = {
      newPostTitle: '',
      newPostContent: ''
    }

    this.inputOnChange = this.inputOnChange.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
  }

  inputOnChange() {
		this.setState({
			newPostTitle: document.getElementById('postTitle').value,
			newPostContent: document.getElementById('postContent').value
		})
	}

	formSubmit(event) {
		event.preventDefault();
		axios.post('/api/'+this.props.params.subredditId+'/new', {
      title: this.state.newPostTitle,
      content: this.state.newPostContent
    }).then((response) => {
      this.setState({
        newPostTitle: '',
        newPostContent: ''
      })
    });
	}

  render() {
    return (
      <form>
        <input type="text" id="postTitle" value={this.state.newPostTitle} onChange={this.inputOnChange}></input>
        <input type="text" id="postContent" onChange={this.inputOnChange} value={this.state.newPostContent}></input>
        <button id="newPost" onClick={this.formSubmit}>Submit</button>
      </form>
    )
  }
}
