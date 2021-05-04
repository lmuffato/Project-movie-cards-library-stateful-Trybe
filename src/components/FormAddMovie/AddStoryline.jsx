import React from 'react';
import PropTypes from 'prop-types';

class AddStoryline extends React.Component {
  render() {
    const { value, callback } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ value }
          onChange={ callback }
          id="storyline-input"
          name="storyline"
        />
      </label>
    );
  }
}

AddStoryline.propTypes = {
  value: PropTypes.string,
  callback: PropTypes.func,
}.isRequered;

export default AddStoryline;
