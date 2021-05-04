import React from 'react';
import PropTypes from 'prop-types';

class AddTitle extends React.Component {
  render() {
    const { value, callback } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          value={ value }
          onChange={ callback }
          id="title-input"
          name="title"
        />
      </label>
    );
  }
}

AddTitle.propTypes = {
  value: PropTypes.string,
  callback: PropTypes.func,
}.isRequered;

export default AddTitle;
