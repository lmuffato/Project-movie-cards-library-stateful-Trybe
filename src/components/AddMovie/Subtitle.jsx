import React from 'react';
import PropTypes from 'prop-types';

class SubTitle extends React.Component {
  render() {
    const { subtitle, handlesub } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ handlesub }
        />
      </label>
    );
  }
}

SubTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handlesub: PropTypes.func.isRequired,
};

export default SubTitle;
