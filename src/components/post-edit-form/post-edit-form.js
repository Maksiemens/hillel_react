import React from 'react';
import './post-edit-form.scss';

export default class PostEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: this.props.post.title,
      postContent: this.props.post.body,
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onUpdatePostItem({
      ...this.props.post,
      title: this.state.postTitle,
      body: this.state.postContent,
    });
  };

  onEditPostItem = () => {
    this.props.onEditPostItem();
  };

  render() {
    return (
      <form className="form" onSubmit={this.onFormSubmit}>
        <div className="card">
          <h5 className="card-header">Post {this.props.post.id}</h5>
          <div className="card-body">
            <div className="form-group mb-3">
              <input
                className="form-control"
                name="postTitle"
                type="text"
                placeholder={this.props.post.title}
                value={this.state.postTitle}
                disabled={this.props.isLoading}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group mb-3">
              <textarea
                className="form-control"
                name="postContent"
                id="post-content"
                placeholder={this.props.post.body}
                value={this.state.postContent}
                disabled={this.props.isLoading}
                onChange={this.onChange}
              ></textarea>
            </div>
            <div className="card-action">
              <button
                className="btn btn-info"
                type="submit"
                disabled={this.props.isLoading}
              >
                Update
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                disabled={this.props.isLoading}
                onClick={this.onEditPostItem}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
