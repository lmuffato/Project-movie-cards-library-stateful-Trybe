import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = PropTypes.shape({
  value: PropTypes.string,
  handleChange: PropTypes.func,
}).isRequired;

export default Subtitle;
