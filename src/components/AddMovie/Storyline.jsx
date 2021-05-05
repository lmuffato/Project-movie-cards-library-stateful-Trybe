import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storyline, AddMovie } = this.props;
    return (
      <div>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="text"
            id="storyline-input"
            data-testid="storyline-input"
            value={ storyline }
            name="storyline"
            onChange={ AddMovie }
          />
        </label>
      </div>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string.isRequired,
  AddMovie: PropTypes.func.isRequired,
};

export default Storyline;
