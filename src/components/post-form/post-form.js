import React from 'react';

export default class PostForm extends React.Component {
  state = {
    postTitle: null,
    postContent: null,
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onCreatePostItem({
      title: this.state.postTitle,
      body: this.state.postContent,
    });
  };

  render() {
    return (
      <form
        className="form"
        onSubmit={this.onFormSubmit}
      >
        <div className="form-group mb-3">
          <label htmlFor="post-title">Post title</label>
          <input
            className="form-control"
            name="postTitle"
            type="text"
            id="post-title"
            placeholder="Enter post title"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="post-content">Post content</label>
          <textarea
            className="form-control"
            name="postContent"
            id="post-content"
            placeholder="Enter post content"
            onChange={this.onChange}
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={this.props.isLoading}
        >
          Create post
        </button>
      </form>
    );
  }
}
