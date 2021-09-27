import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        <input
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          name="subtitle"
          onChange={ handleChange }
          className="text-input-addMovie"
          placeholder="Insira o subtítulo"
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Subtitle;
