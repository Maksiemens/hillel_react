import React from 'react';
import './post-item.scss';
import PostEditForm from '../post-edit-form';
import PostView from '../post-view';
import Spinner from '../spinner';

export default class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditPostActive: false,
    };
  }

  onTogglePostItem = () => {
    this.setState((state) => ({
      isEditPostActive: !state.isEditPostActive,
    }));
  };

  onUpdatePostItem = (post) => {
    this.props.onUpdatePostItem(post);
  };

  onRemovePostItem = (post) => {
    this.props.onRemovePostItem(post);
  };

  render() {
    if (this.state.isEditPostActive) {
      return (
        <PostEditForm
          isLoading={this.props.isLoading}
          post={this.props.post}
          onEditPostItem={this.onTogglePostItem}
          onUpdatePostItem={this.onUpdatePostItem}
        />
      );
    }
    return (
      <PostView
        isLoading={this.props.isLoading}
        post={this.props.post}
        onEditPostItem={this.onTogglePostItem}
        onRemovePostItem={this.onRemovePostItem}
      />
    );
  }
}
