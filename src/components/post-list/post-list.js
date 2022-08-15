import React from 'react';
import PostListItem from '../post-list-item';

export default class PostList extends React.Component {
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
          <PostListItem
            isLoading={this.props.isLoading}
            post={post}
            onRemovePostItem={this.onRemovePostItem}
          />
        </div>
      );
    });

    return <div className="row post-list"> {posts} </div>;
  }
}
