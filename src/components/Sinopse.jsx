import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyline, changeValue } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          onChange={ changeValue }
          value={ storyline }
          data-testid="storyline-input"
          name="storyline"
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  storyline: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default Sinopse;
