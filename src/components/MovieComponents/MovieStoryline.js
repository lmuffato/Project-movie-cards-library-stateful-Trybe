import React from 'react';

class MovieStoryline extends React.Component {
  render() {
    return (
      <label htmlFor="image-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="image-input"
          type="text"
          // value={ storyLine }
          data-testid="storyline-input"
          // onChange={ onClick }
        />
      </label>
    );
  }
}

export default MovieStoryline;
