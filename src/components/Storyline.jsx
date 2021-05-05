import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        {children}
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Storyline;
