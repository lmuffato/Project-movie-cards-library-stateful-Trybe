import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="storyline-input"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          id="storyline-input"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Storyline.defaultProps = {
  value: '',
  onChange: '',
};

Storyline.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Storyline;
