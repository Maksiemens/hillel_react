import React from 'react';
import './app.scss';
import PostsPage from '../posts-page';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <PostsPage/>
      </div>
    );
  }
}
