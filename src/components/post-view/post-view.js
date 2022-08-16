import React from 'react';
import './post-view.scss';

export default class PostView extends React.Component {
  onEditPostItem = () => {
    this.props.onEditPostItem(this.props.post);
  };

  onRemovePostItem = () => {
    this.props.onRemovePostItem(this.props.post);
  };

  render() {
    return (
      <div className="post-list-item">
        <div className="card">
          <h5 className="card-header">Post {this.props.post.id}</h5>
          <div className="card-body">
            <h5 className="card-title">{this.props.post.title}</h5>
            <p className="card-text">{this.props.post.body}</p>
            <div className="card-action">
              <button
                className="btn btn-primary"
                onClick={this.onEditPostItem}
              >
                Edit
              </button>
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
      </div>
    );
  }
}
