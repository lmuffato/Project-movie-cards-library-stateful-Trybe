import React from 'react';
import PropTypes from 'prop-types';

class StorylineInput extends React.Component {
  render() {
    const { value, callback } = this.props;
    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyLine"
          type="text"
          value={ value }
          data-testid="storyline-input"
          onChange={ callback }
          className="form-control"
          id="sinopse"
        />
      </label>
    );
  }
}

StorylineInput.propTypes = PropTypes.shape({
  value: PropTypes.string || PropTypes.number,
  callback: PropTypes.func,
}).isRequired;

export default StorylineInput;
