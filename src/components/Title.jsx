import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Title.propTypes = PropTypes.shape({
  value: PropTypes.string,
  handleChange: PropTypes.func,
}).isRequired;

export default Title;
