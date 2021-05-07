import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { inputValue, handle } = this.props;
    return (
      <div>
        <label
          htmlFor="title-input"
          data-testid="title-input-label"
        >
          Título
          <input
            type="text"
            onChange={ handle }
            data-testid="title-input"
            name="title"
            value={ inputValue }
            id="title-input"
          />
        </label>
      </div>
    );
  }
}

TitleInput.propTypes = {
  handle: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default TitleInput;
