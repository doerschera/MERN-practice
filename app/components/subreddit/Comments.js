import React from 'react';
import axios from 'axios';

export default class Comments extends React.Component {

  displayComments() {
    let comments;
    if(this.props.comments) {
      comments = this.props.comments.map((comment, i) => (<div  key={i} className="panel panel-default">
        <div className="panel-body">
          <h4>{comment}</h4>
        </div>
      </div>))
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
        <form className="form-group">
          <textarea
            value={this.props.comment} onChange={this.props.handleChange}
            className="form-control"
            ></textarea>
          <button
            onClick={this.props.postComment}
            className="btn btn-info"
            >Submit</button>
        </form>
      </div>
    )
  }
}
