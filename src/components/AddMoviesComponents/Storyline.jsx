import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="textarea-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="textarea-input"
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Storyline;
