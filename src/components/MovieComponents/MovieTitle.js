import React from 'react';

class MovieTitle extends React.Component {
  render() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title-input"
          // value={ title }
          data-testid="title-input"
          // onChange={ onClick }
        />
      </label>
    );
  }
}

export default MovieTitle;
