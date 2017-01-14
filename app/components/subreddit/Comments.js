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
    const style = {
      marginTop: 30
    }
    return (
      <div>
        <h4 style={style}>Comments</h4>
        <div>
            {this.displayComments()}
        </div>
        <h4 style={style}>Add Comment</h4>
        <form className="form-group">
          <textarea
            value={this.props.comment} onChange={this.props.handleChange}
            className="form-control"
            ></textarea>
          <button
            onClick={this.props.postComment}
            className="btn btn-info"
            style={style}
            >Submit</button>
        </form>
      </div>
    )
  }
}
