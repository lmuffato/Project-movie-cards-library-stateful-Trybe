import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle-input"
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ handleChange }
        />
      </label>

    );
  }
}

Subtitle.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Subtitle;
