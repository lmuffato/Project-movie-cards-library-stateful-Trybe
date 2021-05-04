import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubTitle extends Component {
  render() {
    const { subtitle, handleInputs } = this.props;

    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          id="subtitle-input"
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ handleInputs }
        />
      </label>
    );
  }
}

SubTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleInputs: PropTypes.func.isRequired,
};

export default SubTitle;
