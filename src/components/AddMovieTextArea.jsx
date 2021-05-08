import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTextArea extends React.Component {
  render() {
    const { method, storyline } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          id="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ method }
        />
      </label>
    );
  }
}

AddMovieTextArea.propTypes = {
  storyline: PropTypes.string.isRequired,
  method: PropTypes.func.isRequired,
};

/* texto, onchange, value, type */

export default AddMovieTextArea;
