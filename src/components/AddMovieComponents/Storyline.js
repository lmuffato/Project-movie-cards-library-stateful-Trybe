import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        <textarea
          type="text"
          value={ storyline }
          data-testid="storyline-input"
          name="storyline"
          onChange={ handleChange }
          className="textarea"
          placeholder="Insira a sinopse"
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
