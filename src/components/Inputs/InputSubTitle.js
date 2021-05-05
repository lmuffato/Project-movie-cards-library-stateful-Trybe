import React from 'react';
import PropTypes from 'prop-types';

class InputSubTitle extends React.Component {
  render() {
    const { handleAddMovie, subtitle } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="Subtítulo">
        Subtítulo
        <input
          onChange={ handleAddMovie }
          data-testid="subtitle-input"
          value={ subtitle }
          type="text"
          name="subtitle"
        />
      </label>
    );
  }
}

InputSubTitle.propTypes = {
  handleAddMovie: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};
export default InputSubTitle;
