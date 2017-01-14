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
    const style = {
      textTransform: 'uppercase'
    }
    const buttonStyle = {
      display: 'block',
      marginTop: 30
    }
    return (
      <div>
        <div className="page-header"><h1 style={style}>{this.props.params.subredditId}</h1></div>
        <form>
          <h4>Title</h4>
          <input type="text" id="postTitle" value={this.state.newPostTitle} onChange={this.inputOnChange}></input>
          <h4>Content</h4>
          <textarea id="postContent" onChange={this.inputOnChange} value={this.state.newPostContent}></textarea>
          <button id="newPost" onClick={this.formSubmit} className="btn btn-info" style={buttonStyle}>Submit</button>
        </form>
      </div>
    )
  }
}
