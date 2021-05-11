import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="textarea">
        Sinopse:
        <textarea
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
          id="textarea"
        />
      </label>
    );
  }
}

Sinopse.defaultProps = {
  value: '',
  onChange: '',
};

Sinopse.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Sinopse;
