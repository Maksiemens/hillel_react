import React from 'react';
import './posts-page.scss';
import PostForm from '../post-form';
import PostList from '../post-list';
import JsonplaceholderService from '../../services/jsonplaceholder-service';

export default class PostsPage extends React.Component {
  jsonplaceholderService = new JsonplaceholderService();

  state = {
    isLoading: false,
    posts: [],
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.jsonplaceholderService.loadAllPosts().then((posts) => {
      this.setState({ isLoading: false, posts });
    });
  }

  createPost = (post) => {
    this.setState({ isLoading: true });
    this.jsonplaceholderService.createPost(post).then((newPost) => {
      this.setState((state) => ({
        isLoading: false,
        posts: [newPost, ...state.posts],
      }));
    });
  };

  removePost = (post) => {
    this.setState({ isLoading: true });
    this.jsonplaceholderService.removePost(post).then(() => {
      this.setState((state) => ({
        isLoading: false,
        posts: state.posts.filter((item) => item.id !== post.id),
      }));
    });
  };

  render() {
    return (
      <div className="posts-page">
        <div className="container">
          <header className="posts-page__header mb-5">
            <PostForm
              isLoading={this.state.isLoading}
              onCreatePostItem={this.createPost}
            />
          </header>
          <div className="posts-page__body">
            <PostList
              isLoading={this.state.isLoading}
              posts={this.state.posts}
              onRemovePostItem={this.removePost}
            />
          </div>
        </div>
      </div>
    );
  }
}
