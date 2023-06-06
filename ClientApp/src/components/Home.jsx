import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>this page will house a demo of the website...</p>
        <a href='/dashboard'>dash</a>
      </div>
    );
  }
}
