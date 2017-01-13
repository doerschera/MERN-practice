import React from 'react';
import axios from 'axios';

export default class Comments extends React.Component {

  displayComments() {
    let comments;
    if(this.props.comments) {
      comments = this.props.comments.map((comment, i) => <p key={i}>{comment}</p>)
    } else {
      comments = null;
    }

    return comments;
  }

  render() {
    return (
      <div>
        <div>
          {this.displayComments()}
        </div>
        <form>
          <textarea
            value={this.props.comment} onChange={this.props.handleChange}></textarea>
          <button onClick={this.props.postComment}>Submit</button>
        </form>
      </div>
    )
  }
}
