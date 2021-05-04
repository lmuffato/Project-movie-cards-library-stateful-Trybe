import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline"
          name="sinopse"
          cols="40"
          rows="2"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
        />
      </label>

    );
  }
}

Sinopse.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Sinopse;
