import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StoryLine extends Component {
  render() {
    const { value, changes } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ changes }
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  value: PropTypes.string,
  changes: PropTypes.func,
}.isRequired;

export default StoryLine;
