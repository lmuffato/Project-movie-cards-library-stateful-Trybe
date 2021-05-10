import React from 'react';
import PropTypes from 'prop-types';

class SubtitleMovie extends React.Component {
  render() {
    const { item, callback } = this.props;
    return (
      <label htmlFor="input-subTitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ item }
          onChange={ callback }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

SubtitleMovie.propTypes = {
  item: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default SubtitleMovie;
