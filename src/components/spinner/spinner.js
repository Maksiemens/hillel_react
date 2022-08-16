import React from 'react';
import './spinner.scss';

export default class Spinner extends React.Component {
  render() {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
}
