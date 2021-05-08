import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="subtitle-input"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          id="subtitle-input"
          data-testid="subtitle-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Subtitle.defaultProps = {
  value: '',
  onChange: '',
};

Subtitle.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Subtitle;
