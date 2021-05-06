import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storyline, handleText } = this.props;
    return (
      <label htmlFor="storylineInput" data-testid="storyline-input-label">
        Sinopse:
        <textarea
          id="storylineInput"
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleText }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  handleText: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default Storyline;
