import React from 'react';
import Proptypes from 'prop-types';

export default class Subtitle extends React.Component {
  render() {
    const { subtitle, changeHandler } = this.props;
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
            value={ subtitle }
            onChange={ changeHandler }
          />
        </label>
      </div>
    );
  }
}

Subtitle.propTypes = {
  subtitle: Proptypes.string.isRequired,
  changeHandler: Proptypes.string.isRequired,
};
