import React from 'react';

class MovieSubtitle extends React.Component {
  render() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle-input"
          type="text"
          // value={ subtitle }
          data-testid="subtitle-input"
          // onChange={ onClick }
        />
      </label>
    );
  }
}

export default MovieSubtitle;
