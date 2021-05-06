import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { id, value, labelText, onChange } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-input-label` }>
        <input
          id={ id }
          name={ id }
          type="number"
          value={ value }
          onChange={ onChange }
          data-testid={ `${id}-input` }
        />
        { labelText }
      </label>
    );
  }
}

Rating.propTypes = {
  id: PropTypes.string,
  value: PropTypes.number,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Rating;
