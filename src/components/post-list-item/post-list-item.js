import React from 'react';

export default class PostListItem extends React.Component {

  onRemovePostItem = () => {
    this.props.onRemovePostItem(this.props.post);
  }

  render() {
    return (
      <div className="post-list-item">
        <div className="card">
          <h5 className="card-header">Post id - {this.props.post.id}</h5>
          <div className="card-body">
            <h5 className="card-title">{this.props.post.title}</h5>
            <p className="card-text">{this.props.post.body}</p>
            <button
              className="btn btn-danger"
              disabled={this.props.isLoading}
              onClick={this.onRemovePostItem}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}
