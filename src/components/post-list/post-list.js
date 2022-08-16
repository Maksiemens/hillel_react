import React from 'react';
import './post-list.scss';
import PostItem from '../post-item';

export default class PostList extends React.Component {
  onUpdatePostItem = (post) => {
    this.props.onUpdatePostItem(post);
  }

  onRemovePostItem = (post) => {
    this.props.onRemovePostItem(post);
  }

  render() {
    const posts = this.props.posts.map((post) => {
      return (
        <div
          className="col-sm-6 mb-3 post-list__item"
          key={post.id}
        >
          <PostItem
            isLoading={this.props.isLoading}
            post={post}
            onUpdatePostItem={this.onUpdatePostItem}
            onRemovePostItem={this.onRemovePostItem}
          />
        </div>
      );
    });

    return <div className="row post-list"> {posts} </div>;
  }
}
