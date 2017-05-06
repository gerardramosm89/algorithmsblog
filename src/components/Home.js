import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return(
      <div>
        <div className="home__banner__wrapper">
          <div className="main-text__container">
            <h1 className="main-text">Algorithm Encounters</h1>
          </div>
        </div>
        <div className="row">
          <div className="info-text__wrapper">
            <h1>A little about this blog</h1>
            <p>This blog is a platform for documenting weekly algorithms that you will commonly face in a job interview. Each week we will take on a problem or two, and we'll post our process on how we solved it here!</p>
          </div>
        </div>
      </div>
    );
  }
}