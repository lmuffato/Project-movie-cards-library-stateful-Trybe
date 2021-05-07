import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { datatestid, datatestidinput, name, change, value, info } = this.props;
    return (
      <label data-testid={ datatestid } htmlFor={ datatestidinput }>
        { info }
        <textarea
          data-testid={ datatestidinput }
          name={ name }
          value={ value }
          onChange={ change }
        />
      </label>
    );
  }
}

TextArea.defaultProps = {
  datatestid: PropTypes.string,
  datatestidinput: PropTypes.string,
  name: PropTypes.string,
  change: PropTypes.func,
  info: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

TextArea.propTypes = {
  datatestid: PropTypes.string,
  datatestidinput: PropTypes.string,
  name: PropTypes.string,
  change: PropTypes.func,
  info: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default TextArea;
