import React from 'react';
import './posts-page.scss';
import PostCreateForm from '../post-create-form';
import PostList from '../post-list';
import JsonplaceholderService from '../../services/jsonplaceholder-service';

export default class PostsPage extends React.Component {
  jsonplaceholderService = new JsonplaceholderService();

  state = {
    isLoading: false,
    error: null,
    posts: [],
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.jsonplaceholderService
      .loadAllPosts()
      .then((posts) => {
        this.setState({ isLoading: false, posts });
      })
      .catch(this.onError);
  }

  onError = (error) => {
    this.setState({ isLoading: false, error });
  };

  createPost = (post) => {
    this.setState({ isLoading: true });
    this.jsonplaceholderService
      .createPost(post)
      .then((newPost) => {
        this.setState((state) => ({
          isLoading: false,
          posts: [newPost, ...state.posts],
        }));
      })
      .catch(this.onError);
  };

  updatePost = (post) => {
    this.setState({ isLoading: true });
    this.jsonplaceholderService
      .updatePost(post)
      .then((newPost) => {
        this.setState((state) => ({
          isLoading: false,
          posts: state.posts.map((post) =>
            post.id === newPost.id ? { ...post, ...newPost } : post,
          ),
        }));
      })
      .catch(this.onError);
  };

  removePost = (post) => {
    this.setState({ isLoading: true });
    this.jsonplaceholderService
      .removePost(post)
      .then(() => {
        this.setState((state) => ({
          isLoading: false,
          posts: state.posts.filter((item) => item.id !== post.id),
        }));
      })
      .catch(this.onError);
  };

  render() {
    return (
      <div className="posts-page">
        <div className="container">
          <header className="posts-page__header mb-5">
            <PostCreateForm
              isLoading={this.state.isLoading}
              onCreatePostItem={this.createPost}
            />
          </header>
          <div className="posts-page__body">
            <PostList
              isLoading={this.state.isLoading}
              posts={this.state.posts}
              onUpdatePostItem={this.updatePost}
              onRemovePostItem={this.removePost}
            />
          </div>
        </div>
      </div>
    );
  }
}
