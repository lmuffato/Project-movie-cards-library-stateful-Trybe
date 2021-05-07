import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieInputs extends Component {
  render() {
  // inf = [tagInput[0], type[1], id[2], name[3], label[4]]
    const { value, onChange, inf } = this.props;
    const CustomTag = inf[0];
    return (
      <label htmlFor={ `${inf[2]}` } data-testid={ `${inf[2]}-input-label` }>
        {`${inf[4]}`}
        <CustomTag
          type={ `${inf[1]}` }
          data-testid={ `${inf[2]}-input` }
          id={ `${inf[2]}` }
          name={ inf[3] }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieInputs.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  inf: PropTypes.array,
}.isRequired;

export default AddMovieInputs;
