import React from 'react';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      hello: 'world',
    };
  }

  render() {
    return <h1>hello world</h1>;
  }
}

export default MovieLibrary;
