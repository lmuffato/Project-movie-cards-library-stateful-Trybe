import React from 'react';
import PropTypes from 'prop-types';

class SubtitleMovieC extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitleMovie">
        Subtítulo
        <input
          data-testid="subtitle-input"
          id="subtitleMovie"
          value={ subtitle }
          type="text"
          name="subtitle"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SubtitleMovieC.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SubtitleMovieC;
