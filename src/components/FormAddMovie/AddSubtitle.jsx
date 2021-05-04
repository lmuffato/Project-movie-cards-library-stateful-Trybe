import React from 'react';
import PropTypes from 'prop-types';

class AddSubtitle extends React.Component {
  render() {
    const { value, callback } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          value={ value }
          onChange={ callback }
          id="subtitle-input"
          name="subtitle"
        />
      </label>
    );
  }
}

AddSubtitle.propTypes = {
  value: PropTypes.string,
  callback: PropTypes.func,
}.isRequered;

export default AddSubtitle;
