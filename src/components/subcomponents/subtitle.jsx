import React from 'react';
import Proptypes from 'prop-types';

export default class Subtitle extends React.Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <div>
        <label
          htmlFor="subtitle"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            data-testid="subtitle-input"
            value={ name }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Subtitle.propTypes = {
  name: Proptypes.string.isRequired,
  onChange: Proptypes.string.isRequired,
};
