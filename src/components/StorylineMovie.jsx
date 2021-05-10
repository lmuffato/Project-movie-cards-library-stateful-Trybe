import React from 'react';
import PropTypes from 'prop-types';

class StorylineMovie extends React.Component {
  render() {
    const { item, callback } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ item }
          onChange={ callback }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

StorylineMovie.propTypes = {
  item: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default StorylineMovie;
