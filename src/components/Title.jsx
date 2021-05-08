import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="title-input"
        data-testid="title-input-label"
      >
        Título
        <input
          id="title-input"
          data-testid="title-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Title.defaultProps = {
  value: '',
  onChange: '',
};

Title.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Title;
